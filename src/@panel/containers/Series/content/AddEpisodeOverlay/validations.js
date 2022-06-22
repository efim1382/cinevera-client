export default {
	title: {
		validator: "required",
		message: "Field is required",
	},

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
};
