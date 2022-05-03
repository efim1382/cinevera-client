import React from "react";
import BasicButton from "./index";

export default {
	title: "components/BasicButton",
	component: BasicButton,
};

const Template = (args) => <BasicButton {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
	controls: {
		include: [
			"icon",
			"text",
			"appearance",
			"isLoading",
			"isDisabled",
		],
	},
};

Primary.args = {
	text: "Submit",
	appearance: "fill",
	icon: "search",
	isLoading: false,
	isDisabled: false,
	theme: "primary",
};

export const Accent = Template.bind({});

Accent.parameters = {
	controls: {
		include: [
			"icon",
			"text",
			"appearance",
			"isLoading",
			"isDisabled",
		],
	},
};

Accent.args = {
	text: "Submit",
	appearance: "fill",
	icon: "search",
	isLoading: false,
	isDisabled: false,
	theme: "accent",
};
