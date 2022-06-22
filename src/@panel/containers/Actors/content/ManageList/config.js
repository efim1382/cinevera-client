import * as tableConfig from "@panel/components/Table/config";

export const KEY_ACTOR = "actor";

export const headings = [
	{
		key: tableConfig.KEY_CHECKBOX,
	},

	{
		key: KEY_ACTOR,
		label: "Name",
		width: 350,
	},

	{
		key: tableConfig.KEY_REMOVE,
	},
];
