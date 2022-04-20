import React from "react";
import LoadingComponent from "./index";

export default {
	title: "components/Loading",
	component: LoadingComponent,
};

const Template = (args) => <LoadingComponent {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
	controls: {
		include: [],
	},
};

Primary.args = {
	appearance: "primary",
};

export const Transparent = Template.bind({});

Transparent.parameters = {
	backgrounds: { default: "dark" },

	controls: {
		include: [],
	},
};
