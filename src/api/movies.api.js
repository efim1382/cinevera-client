import XHR from "classes/XHR";

/**
 *
 * @returns {Promise<Response>}
 */
export const getObjectsList = (data = {}) => {
	const {
		sort = "recommended",
		genres = [],
		type,
		limit,
	} = data;

	return XHR.get({
		url: "/objects/",

		data: {
			sort,
			type,
			genres,
			limit,
		},
	});
};

/**
 *
 * @param {string} id
 * @returns {*}
 */
export const getMovieDetails = (id) => {
	return XHR.get({
		url: `/objects/movies/details/${id}/`,
	});
};

/**
 *
 * @param {string} id
 * @returns {*}
 */
export const getSeriesDetails = (id) => {
	return XHR.get({
		url: `/objects/series/details/${id}/`,
	});
};

/**
 *
 * @param {string} params.excludeId
 * @param {string} params.type
 * @returns {Promise<Response>}
 */
export const getPopular = (params = {}) => {
	const { excludeId, type } = params;

	return XHR.get({
		url: "/objects/popular/",

		data: {
			type,
			exclude: excludeId,
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
		url: "/search/",
		data,
	});
};
