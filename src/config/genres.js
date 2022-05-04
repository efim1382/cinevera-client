export const genres = [
	{
		label: "Thriller",
		value: "thriller",
	},

	{
		label: "Mystery",
		value: "mystery",
	},

	{
		label: "Action",
		value: "action",
	},

	{
		label: "Fantasy",
		value: "fantasy",
	},

	{
		label: "Animation",
		value: "animation",
	},

	{
		label: "War",
		value: "war",
	},

	{
		label: "History",
		value: "history",
	},

	{
		label: "Documentary",
		value: "documentary",
	},

	{
		label: "Western",
		value: "western",
	},

	{
		label: "Drama",
		value: "drama",
	},

	{
		label: "Crime",
		value: "crime",
	},

	{
		label: "Horror",
		value: "horror",
	},

	{
		label: "Romance",
		value: "romance",
	},

	{
		label: "Comedy",
		value: "comedy",
	},

	{
		label: "Adventure",
		value: "adventure",
	},

	{
		label: "Family",
		value: "family",
	},

	{
		label: "Biography",
		value: "biography",
	},

	{
		label: "Musical",
		value: "musical",
	},
];

/**
 *
 * @param {string} code
 * @returns {{label: string, value: string}}}
 */
export const getGenreByCode = (code) => {
	return genres.find((item) => item.value === code);
};
