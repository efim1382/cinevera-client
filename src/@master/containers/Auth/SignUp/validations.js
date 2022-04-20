export default {
	name: [
		{
			validator: "required",
			message: "Name is required",
		},
	],

	email: [
		{
			validator: "required",
			message: "Email is required",
		},

		{
			validator: "email",
			message: "Invalid email",
		},
	],

	password: [
		{
			validator: "required",
			message: "Password is required",
		},

		{
			validator: "minLength",
			param: 8,
			message: "Password should be length more then 8",
		},
	],
};
