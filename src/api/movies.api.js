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
