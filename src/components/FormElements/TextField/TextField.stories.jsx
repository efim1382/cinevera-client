import React from "react";
import TextFieldElement from "components/FormElements/TextField";

export default {
	title: "components/FormElements",
	component: TextFieldElement,
};

export const TextField = ({ ...args }) => (
	<TextFieldElement {...args} />
);

TextField.parameters = {
	layout: "centered",
};

TextField.args = {
	value: "Input text",
	label: "Label",
	placeholder: "Type text here...",
	helperText: "Helper text",
	error: "",
	icon: "person",
	onFocus: Function(),
	onBlur: Function(),
	onChange: Function(),
};
