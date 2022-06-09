import React, { useContext } from "react";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import Textarea from "components/FormElements/Textarea";
import BasicButton from "components/BasicButton";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

const Overview = () => {
	const { state } = useContext(MovieDetailsContext);
	const { data } = state;

	const descriptionInitialValues = {
		shortDescription: data?.shortDescription || "",
		fullDescription: data?.fullDescription || "",
	};

	const additionalInitialValues = {
		year: data?.year ? data.year[0] : "",
		ageLimit: data?.ageLimit || "",
	};

	return (
		<div className={style.overview}>
			<h3 className={style.title_section}>Description</h3>

			<Form onSubmit={() => {}} initialValues={descriptionInitialValues} className={style.form_section}>
				<Input name="shortDescription">
					<TextField
						label="Short description"
					/>
				</Input>

				<Input name="fullDescription">
					<Textarea
						label="Full description"
					/>
				</Input>

				<BasicButton
					type="submit"
					text="Update"
					className={style.submit}
				/>
			</Form>

			<h3 className={style.title_section}>More information</h3>

			<Form onSubmit={() => {}} initialValues={additionalInitialValues} className={style.form_section}>
				<Input name="year">
					<TextField
						label="Year"
					/>
				</Input>

				<Input name="ageLimit">
					<TextField
						label="Age Rating"
					/>
				</Input>

				<BasicButton
					type="submit"
					text="Update"
					className={style.submit}
				/>
			</Form>
		</div>
	);
};

export default Overview;
