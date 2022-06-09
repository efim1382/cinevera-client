import XHR from "classes/XHR";

export const getMovie = (id) => {
	return XHR.get({
		url: `/admin/movies/${id}/`,
	});
};

export const getMovies = () => {
	return XHR.get({
		url: "/admin/movies/",
	});
};

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

export const updateMovie = (id, data) => {
	const {
		title,
		shortDescription,
		fullDescription,
		year,
		ageLimit,
		posterUrl,
		backgroundUrl,
	} = data;

	return XHR.patch({
		url: `/admin/movies/${id}/`,

		data: {
			title,
			shortDescription,
			fullDescription,
			year,
			ageLimit,
			posterUrl,
			backgroundUrl,
		},
	});
};

export const createSeries = (data) => {
	const {
		title,
		shortDescription,
		fullDescription,
		posterUrl,
		backgroundUrl,
		ageLimit,
		genres,
		year,
		yearFrom,
		yearTo,
		cast,
	} = data;

	const formattedYear = year
		? year
		: [yearFrom, yearTo];

	return XHR.post({
		url: "/admin/series/create/",

		data: {
			title,
			shortDescription,
			fullDescription,
			posterUrl,
			backgroundUrl,
			ageLimit,
			genres,
			year: formattedYear,
			cast,
		},
	});
};
