import React from "react";
import IconComponent from "./index";
import style from "./style.css";

export default {
	title: "components",
	component: IconComponent,
};

export const Icon = (args) => (
	<IconComponent {...args} className={style.story_icon} />
);

Icon.parameters = {
	layout: "centered",

	controls: {
		include: [
			"name",
		],
	},
};

Icon.args = {
	name: "search",
};
