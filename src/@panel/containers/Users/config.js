import * as tableConfig from "@panel/components/Table/config";

export const KEY_NAME = "name";
export const KEY_EMAIL = "email";
export const KEY_ROLE = "role";

export const headings = [
	{
		key: tableConfig.KEY_CHECKBOX,
	},

	{
		key: KEY_NAME,
		label: "Name",
		width: 250,
	},

	{
		key: KEY_EMAIL,
		label: "Email",
		width: 300,
	},

	{
		key: KEY_ROLE,
		label: "Role",
		width: 150,
	},

	{
		key: tableConfig.KEY_REMOVE,
	},
];
