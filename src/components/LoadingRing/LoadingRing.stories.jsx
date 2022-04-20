import React from "react";
import LoadingComponent from "./index";

export default {
	title: "components",
	component: LoadingComponent,
};

export const LoadingRing = (args) => (
	<LoadingComponent {...args} />
);

LoadingRing.parameters = {
	layout: "centered",

	controls: {
		include: [
			"isShown",
		],
	},
};

LoadingRing.args = {
	isShown: true,
};
