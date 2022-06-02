import XHR from "classes/XHR";

export const createMovie = (data) => {
	const {
		title,
		shortDescription,
		fullDescription,
		posterUrl,
		backgroundUrl,
		year,
		ageLimit,
		genres,
		cast,
	} = data;

	return XHR.post({
		url: "/admin/movies/create/",

		data: {
			title,
			shortDescription,
			fullDescription,
			posterUrl,
			backgroundUrl,
			ageLimit,
			genres,
			cast,

			year: typeof year === "object" && year.constructor === Array
				? year
				: [year],
		},
	});
};
