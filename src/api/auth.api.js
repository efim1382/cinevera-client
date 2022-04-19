import XHR from "classes/XHR";

/**
 *
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {*}
 */
export const signIn = (data = {}) => {
  const {
    email,
    password,
  } = data;

  return XHR.post({
    url: "/auth/login",

    data: {
      email,
      password,
    },
  });
};
