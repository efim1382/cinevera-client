import XHR from "classes/XHR";

export const getMovie = (id) => {
	return XHR.get({
		url: `/admin/movies/${id}/`,
	});
};

export const getObject = (id) => {
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
		cast,
		genres,
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
			cast,
			genres,
		},
	});
};

export const getSeriesDetails = (id) => {
	return XHR.get({
		url: `/admin/series/${id}/`,
	});
};

export const getSeries = () => {
	return XHR.get({
		url: "/admin/series/",
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

export const updateSeries = (id, data) => {
	const {
		title,
		shortDescription,
		fullDescription,
		year,
		ageLimit,
		posterUrl,
		backgroundUrl,
		cast,
		genres,
	} = data;

	return XHR.patch({
		url: `/admin/series/${id}/`,

		data: {
			title,
			shortDescription,
			fullDescription,
			year,
			ageLimit,
			posterUrl,
			backgroundUrl,
			cast,
			genres,
		},
	});
};

export const getSeriesSeasons = (seriesId) => {
	return XHR.get({
		url: `/admin/series/${seriesId}/seasons/`,
	});
};

export const createSeason = (seriesId, data = {}) => {
	const {
		backgroundUrl,
	} = data;

	return XHR.post({
		url: `/admin/series/${seriesId}/seasons/`,

		data: {
			backgroundUrl,
		},
	});
};

export const updateSeason = (seriesId, seasonId, data = {}) => {
	const {
		backgroundUrl,
	} = data;

	return XHR.patch({
		url: `/admin/series/${seriesId}/seasons/${seasonId}/`,

		data: {
			backgroundUrl,
		},
	});
};

export const deleteSeason = (seriesId, seasonId) => {
	return XHR.delete({
		url: `/admin/series/${seriesId}/seasons/${seasonId}/`,
	});
};

export const createEpisode = (seriesId, seasonId, data = {}) => {
	const {
		title,
		posterUrl,
	} = data;

	return XHR.post({
		url: `/admin/series/${seriesId}/seasons/${seasonId}/episodes/`,

		data: {
			title,
			posterUrl,
		},
	});
};

export const updateEpisode = (seriesId, episodeId, data = {}) => {
	const {
		title,
		posterUrl,
	} = data;

	return XHR.patch({
		url: `/admin/series/${seriesId}/episodes/${episodeId}/`,

		data: {
			title,
			posterUrl,
		},
	});
};

export const deleteEpisode = (seriesId, episodeId) => {
	return XHR.delete({
		url: `/admin/series/${seriesId}/episodes/${episodeId}/`,
	});
};
