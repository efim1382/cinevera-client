import * as tableConfig from "@panel/components/Table/config";

export const KEY_TITLE = "title";
export const KEY_GENRES = "genres";
export const KEY_YEAR = "year";

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
		width: 250,
	},

	{
		key: KEY_YEAR,
		label: "Year",
		width: 80,
	},

	{
		key: tableConfig.KEY_REMOVE,
	},
];
