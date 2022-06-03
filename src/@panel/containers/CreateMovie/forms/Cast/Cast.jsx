import React, { Fragment } from "react";
import Input from "components/Form/Input";
import CastField from "@panel/components/FormElements/CastField";
import createStyle from "@panel/containers/CreateMovie/style.css";

const Basic = () => {
	return (
		<Fragment>
			<h1 className={createStyle.title}>Add cast</h1>
			<p className={createStyle.caption}>Add please this movie actors</p>

			<Input name="cast">
				<CastField />
			</Input>
		</Fragment>
	);
};

export default Basic;
