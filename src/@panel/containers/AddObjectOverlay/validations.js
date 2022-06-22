export default {
	title: [
		{
			validator: "required",
			message: "Field is required",
		},
	],

	ageLimit: [
		{
			validator: "required",
			message: "Field is required",
		},

		{
			validator: "number",
			message: "Should be a number",
		},

		{
			validator: "minLength",
			param: 2,
			message: "Min length 2",
		},

		{
			validator: "maxLength",
			param: 2,
			message: "Max length 2",
		},
	],

	yearFrom: [
		{
			validator: "required",
			message: "Field is required",
		},

		{
			validator: "number",
			message: "Should be a number",
		},

		{
			validator: "minLength",
			param: 4,
			message: "Min length 4",
		},

		{
			validator: "maxLength",
			param: 4,
			message: "Max length 4",
		},
	],

	yearTo: [
		{
			validator: "number",
			message: "Should be a number",
		},

		{
			validator: "minLength",
			param: 4,
			message: "Min length 4",
		},

		{
			validator: "maxLength",
			param: 4,
			message: "Max length 4",
		},
	],
};
