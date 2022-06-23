import XHR from "classes/XHR";

export const createActor = (data = {}) => {
	const {
		name,
		photo,
	} = data;

	return XHR.post({
		url: "/admin/actors/create/",

		data: {
			name,
			photo,
		},
	});
};

export const getActorsList = () => {
	return XHR.get({
		url: "/admin/actors/",
	});
};

export const getActor = (id) => {
	return XHR.get({
		url: `/admin/actors/${id}/`,
	});
};

export const updateActor = (id, data = {}) => {
	const {
		name,
		photo,
	} = data;

	return XHR.patch({
		url: `/admin/actors/${id}/`,

		data: {
			name,
			photo,
		},
	});
};
