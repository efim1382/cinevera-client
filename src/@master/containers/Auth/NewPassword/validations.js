export default {
	password: [
		{
			validator: "required",
			message: "Password is required",
		},

		{
			validator: "minLength",
			param: 8,
			message: "Password should be length more or equal 8",
		},
	],
};
