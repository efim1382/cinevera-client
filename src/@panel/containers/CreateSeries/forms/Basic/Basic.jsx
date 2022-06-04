import React, { Fragment } from "react";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import Textarea from "components/FormElements/Textarea";
import createStyle from "@panel/containers/CreateSeries/style.css";

const Basic = () => {
	return (
		<Fragment>
			<h1 className={createStyle.title}>Add basic information</h1>
			<p className={createStyle.caption}>Enter please main information about movie</p>

			<Input name="title">
				<TextField
					label="Title"
					className={createStyle.input}
				/>
			</Input>

			<Input name="shortDescription">
				<TextField
					label="Description"
					helperText="Short description about movie"
					className={createStyle.input}
				/>
			</Input>

			<Input name="fullDescription">
				<Textarea
					label="Overview"
					helperText="Full movie overview"
					className={createStyle.input}
				/>
			</Input>
		</Fragment>
	);
};

export default Basic;
