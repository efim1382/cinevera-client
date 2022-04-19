const host = process.env.API_HOST || "http://localhost:8001";

class XHR {
  /**
   *
   * @param {string} url
   * @param data
   * @returns {Promise<Response>}
   */
  get({ url, data }) {
    const fullUrl = XHR.formatUrl(
			`${host}/api${url}`,
			XHR.appendToken(XHR.validateData(data))
		);

    return fetch(fullUrl, { method: "get" })
      .then(XHR.parseResponse);
  }

  /**
   *
   * @param {string} url
   * @param data
   * @returns {Promise<Response>}
   */
  post({ url, data = {} }) {
    const body = XHR.formatBody(XHR.appendToken(data));
    const headers = {};

    if (data.constructor && data.constructor === Object) {
      headers["Content-Type"] = "application/json";
    }

    return fetch(`${host}/api${url}`, {
      method: "post",
      headers,
      body,
    }).then(XHR.parseResponse);
  }

  /**
   *
   * @param {string} url
   * @param data
   * @returns {Promise<Response>}
   */
  patch({ url, data = {} }) {
    const body = XHR.formatBody(XHR.appendToken(data));
    const headers = {};

    if (data.constructor && data.constructor === Object) {
      headers["Content-Type"] = "application/json";
    }

    return fetch(`${host}/api${url}`, {
      method: "patch",
      headers,
      body,
    }).then(XHR.parseResponse);
  }

  /**
   *
   * @param {string} url
   * @param data
   * @returns {Promise<Response>}
   */
  delete({ url, data = {} }) {
    const body = XHR.formatBody(XHR.appendToken(data));
    const headers = {};

    if (data.constructor && data.constructor === Object) {
      headers["Content-Type"] = "application/json";
    }

    return fetch(`${host}/api${url}`, {
      method: "delete",
      headers,
      body,
    }).then(XHR.parseResponse);
  }

  /**
   *
   * @param {string} url
   * @param {Object} data
   * @returns {string|*}
   */
  static formatUrl(url, data = {}) {
    const search = new URLSearchParams("");

    Object.entries(data).forEach(([key, value]) => {
      search.append(key, value);
    });

    if (search.toString()) {
      return `${url}?${search.toString()}`;
    }

    return url;
  }

  /**
   *
   * @param data
   */
  static validateData(data = {}) {
    const newData = {};

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        newData[key] = value;
      }
    });

    return newData;
  }

  /**
   *
   * @param data
   * @returns {{token: string}}
   */
  static appendToken(data = {}) {
    const token = XHR.getAjaxToken();

    if (!token) {
      return data;
    }

    if (data.constructor === Object) {
      return {
        token,
        ...data,
      };
    }
  }

  /**
   *
   * @returns {string}
   */
  static getAjaxToken() {
    return window.localStorage.getItem("token");
  }

  /**
   *
   * @param data
   * @returns {string|{}}
   */
  static formatBody(data = {}) {
    if (data.constructor === Object) {
      return JSON.stringify(data);
    }

    return data;
  }

  /**
   *
   * @param {Promise} response
   * @returns {Promise<{}>}
   */
  static async parseResponse(response) {
    const responseContentType = response.headers.get("Content-Type").toLowerCase();

    const json = responseContentType.indexOf("application/json") !== -1
      ? await response.json()
      : {};

    if (response.status !== 200 && !json.hasOwnProperty(status)) {
      // system notification call can be here

      return Promise.reject(
        XHR.errorObject(json.error || {
          code: response.status,
          message: response.statusText,
        })
      );
    }

    if (response.status === 200 && json.status === true) {
      return Promise.resolve(json.data || {});
    }

    if (response.status === 200 && json.status === false) {
      return Promise.reject(
        XHR.errorObject(json.error)
      );
    }

    console.log("------- no name error ------- ");
    console.log(response);
    console.log(json);
    console.log("----------------------------- ");

    return Promise.reject(
      XHR.errorObject()
    );
  }

  /**
   *
   * @param {Object} response
   * @returns {{code: string, message: string, key: {}, validation: {}}}
   */
  static errorObject(response = {}) {
    const {
      code = "undefined_error",
      key = {},
      message = "Undefined error",
      validation = {},
    } = response;

    return {
      code,
      key,
      message,
      validation,
    };
  }
}

export default new XHR();
