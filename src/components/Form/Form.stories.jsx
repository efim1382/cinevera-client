import React from "react";
import FormElement from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";

export default {
	title: "components/Form",
	component: FormElement,
};

export const Form = () => (
	<FormElement onSubmit={() => {}}>
		<Input name="email">
			<TextField
				icon="email"
				type="email"
				label="Email"
				placeholder="Email"
			/>
		</Input>

		<Input name="name">
			<TextField
				icon="person"
				label="Name"
				placeholder="Name"
			/>
		</Input>

		<Input name="password">
			<TextField
				icon="lock"
				type="password"
				label="Password"
				placeholder="Password"
			/>
		</Input>

		<BasicButton
			type="submit"
			text="Submit"
		/>
	</FormElement>
);

Form.parameters = {
	layout: "centered",
};
