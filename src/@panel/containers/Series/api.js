import XHR from "classes/XHR";

export const getSeries = () => {
	return XHR.get({
		url: "/admin/series/",
	});
};
