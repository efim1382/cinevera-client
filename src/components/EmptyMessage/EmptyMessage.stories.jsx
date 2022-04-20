import React from "react";
import EmptyMessageComponent from "./index";

export default {
	title: "components",
	component: EmptyMessageComponent,
};

export const EmptyMessage = (args) => <EmptyMessageComponent {...args} />;

EmptyMessage.parameters = {
	layout: "centered",

	controls: {
		include: [
			"text",
		],
	},
};

EmptyMessage.args = {
	text: "There is no items yet",
};
