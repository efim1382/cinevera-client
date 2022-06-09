import React, { Fragment } from "react";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import GenresField from "@panel/components/FormElements/GenresField";
import createStyle from "@panel/containers/Movies/Create/style.css";
import style from "./style.css";

const Basic = () => {
	return (
		<Fragment>
			<h1 className={createStyle.title}>Additional information</h1>
			<p className={createStyle.caption}>Enter please movie additinal information</p>

			<div className={style.inputs_grouped}>
				<Input name="year">
					<TextField
						label="Year"
						maxLength="4"
						className={style.year}
					/>
				</Input>

				<Input name="ageLimit">
					<TextField
						label="Age Limit"
						maxLength="2"
						className={style.age}
					/>
				</Input>

				<Input name="genres">
					<GenresField className={style.genres} />
				</Input>
			</div>
		</Fragment>
	);
};

export default Basic;
