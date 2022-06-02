import XHR from "classes/XHR";

/**
 *
 * @param data
 * @param {string} data.search
 * @param {number} data.limit
 * @returns {Promise<Express.Response>}
 */
export const searchActor = (data = {}) => {
	const {
		query,
		limit,
	} = data;

	return XHR.get({
		url: "/get-actor/",

		data: {
			query,
			limit,
		},
	});
};
