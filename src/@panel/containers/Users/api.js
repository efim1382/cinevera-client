import XHR from "classes/XHR";

export const getUsers = () => {
	return XHR.get({
		url: "/admin/series/",
	});
};
