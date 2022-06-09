import * as tableConfig from "@panel/components/Table/config";

export const KEY_TITLE = "title";
export const KEY_GENRES = "genres";
export const KEY_YEAR = "year";
export const KEY_AGE_LIMIT = "ageLimit";

export const headings = [
	{
		key: tableConfig.KEY_CHECKBOX,
	},

	{
		key: KEY_TITLE,
		label: "Title",
		width: 250,
	},

	{
		key: KEY_GENRES,
		label: "Genres",
		width: 300,
	},

	{
		key: KEY_YEAR,
		label: "Year",
		width: 100,
	},

	{
		key: KEY_AGE_LIMIT,
		label: "Age Limit",
		width: 140,
	},

	{
		key: tableConfig.KEY_REMOVE,
	},
];
