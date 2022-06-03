export default {
	posterUrl: [
		{
			validator: "required",
			message: "Field is required",
		},

		{
			validator: "url",
			message: "Invalid url format",
		},
	],

	backgroundUrl: [
		{
			validator: "required",
			message: "Field is required",
		},

		{
			validator: "url",
			message: "Invalid url format",
		},
	],
};
