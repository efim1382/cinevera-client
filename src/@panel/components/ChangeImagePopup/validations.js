export default {
	image: [
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
