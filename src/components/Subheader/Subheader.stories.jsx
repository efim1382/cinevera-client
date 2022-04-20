import React from "react";
import SubheaderComponent from "./index";

export default {
	title: "components",
	component: SubheaderComponent,
};

export const Subheader = (args) => (
	<SubheaderComponent {...args} />
);

Subheader.parameters = {
	layout: "fullscreen",

	controls: {
		include: [
			"text",
			"isLoading",
			"title",
		],
	},
};

Subheader.args = {
	title: "This is a title",
	text: "This is a description",
	isLoading: false,
}
