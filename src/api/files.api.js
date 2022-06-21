import XHR from "classes/XHR";

export const uploadFile = () => {
	XHR.post({
		url: "/upload-file/",
	});
};
