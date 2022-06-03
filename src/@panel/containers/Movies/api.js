import XHR from "classes/XHR";

export const getMovies = () => {
	return XHR.get({
		url: "/admin/movies/",
	});
};
