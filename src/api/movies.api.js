import XHR from "classes/XHR";

/**
 *
 * @returns {Promise<Response>}
 */
export const getMoviesList = () => {
	return XHR.get({
		url: "/movies/",
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
