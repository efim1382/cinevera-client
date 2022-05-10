import XHR from "classes/XHR";

/**
 *
 * @returns {Promise<Response>}
 */
export const getMoviesList = (data = {}) => {
	const {
		sort = "recommended",
		genres = [],
	} = data;

	return XHR.get({
		url: "/movies/",

		data: {
			sort,
			genres,
		},
	});
};

/**
 *
 * @param {string} params.query
 * @param {number} params.limit
 * @returns {Promise<Response>}
 */
export const search = (params = {}) => {
	const { query, limit } = params;

	const data = {};

	if (query) {
		data["query"] = query;
	}

	if (limit) {
		data["limit"] = limit;
	}

	return XHR.get({
		url: "/movies/search/",
		data,
	});
};

/**
 *
 * @returns {Promise<Response>}
 */
export const getPopularMoviesList = () => {
	return XHR.get({
		url: "/movies/popular/",
	});
};

/**
 *
 * @param {string} id
 * @returns {*}
 */
export const getMovie = (id) => {
	return XHR.get({
		url: `/movies/${id}/`,
	});
};
