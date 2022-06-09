import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

const Design = () => {
	const { id } = useParams();

	const { state, actions } = useContext(MovieDetailsContext);
	const { data } = state;

	const [isUpdating, setIsUpdating] = useState(false);

	const initialValues = {
		posterUrl: data?.posterUrl || "",
		backgroundUrl: data?.backgroundUrl || "",
	};

	const onSubmit = (values) => {
		setIsUpdating(true);

		updateMovie(id, values)
			.then(({ movie }) => {
				actions.setData(movie);
				setIsUpdating(false);
			})

			.catch((error) => {
				setIsUpdating(false);
				console.log(error);
			});
	};

	return (
		<Form onSubmit={onSubmit} initialValues={initialValues} className={style.form_section}>
			<Input name="posterUrl">
				<TextField
					label="Poster"
				/>
			</Input>

			<Input name="backgroundUrl">
				<TextField
					label="Background"
				/>
			</Input>

			<BasicButton
				type="submit"
				text="Update"
				isLoading={isUpdating}
				className={style.submit}
			/>
		</Form>
	);
};

export default Design;
