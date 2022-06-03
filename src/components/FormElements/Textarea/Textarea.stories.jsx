import React from "react";
import TextareaElement from "components/FormElements/Textarea";

export default {
	title: "components/FormElements",
	component: TextareaElement,
};

export const Textarea = ({ ...args }) => (
	<TextareaElement {...args} />
);

Textarea.parameters = {
	layout: "centered",
};

Textarea.args = {
	value: "Textarea text",
	label: "Label",
	placeholder: "Type text here...",
	helperText: "Helper text",
	error: "",
	icon: "person",
	onFocus: Function(),
	onBlur: Function(),
	onChange: Function(),
};
