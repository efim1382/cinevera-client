import React, { Fragment } from "react";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import createStyle from "@panel/containers/CreateMovieOverlay/style.css";

const Basic = () => {
	return (
		<Fragment>
			<h1 className={createStyle.title}>Add images</h1>
			<p className={createStyle.caption}>Enter please main movie images</p>

			<Input name="posterUrl">
				<TextField
					label="Poster"
					className={createStyle.input}
				/>
			</Input>

			<Input name="backgroundUrl">
				<TextField
					label="Background"
					className={createStyle.input}
				/>
			</Input>
		</Fragment>
	);
};

export default Basic;
