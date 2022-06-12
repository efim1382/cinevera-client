import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import Textarea from "components/FormElements/Textarea";
import BasicButton from "components/BasicButton";
import GenresField from "@panel/components/FormElements/GenresField/GenresField";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import { updateMovie } from "@panel/api/movies.api";
import style from "./style.css";

const Overview = () => {
	const { id } = useParams();
	const [isDescriptionUpdating, setIsDescriptionUpdating] = useState(false);
	const [isAdditionalUpdating, setIsAdditionalUpdating] = useState(false);
	const [isGenresUpdating, setIsGenresUpdating] = useState(false);
	const { state, actions } = useContext(MovieDetailsContext);
	const { data } = state;

	const descriptionInitialValues = {
		shortDescription: data?.shortDescription || "",
		fullDescription: data?.fullDescription || "",
	};

	const additionalInitialValues = {
		year: data?.year ? data.year[0] : "",
		ageLimit: data?.ageLimit || "",
	};

	const genresInitialValues = {
		genres: data?.genres || [],
	};

	const onDescriptionSubmit = (values) => {
		setIsDescriptionUpdating(true);

		updateMovie(id, values)
			.then(({ movie }) => {
				actions.setData(movie);
				setIsDescriptionUpdating(false);
			})

			.catch((error) => {
				setIsDescriptionUpdating(false);
				console.log(error);
			});
	};

	const onAdditionalSubmit = (values) => {
		setIsAdditionalUpdating(true);

		updateMovie(id, values)
			.then(({ movie }) => {
				actions.setData(movie);
				setIsAdditionalUpdating(false);
			})

			.catch((error) => {
				setIsAdditionalUpdating(false);
				console.log(error);
			});
	};

	const onGenresSubmit = (values) => {
		setIsGenresUpdating(true);

		updateMovie(id, values)
			.then(({ movie }) => {
				actions.setData(movie);
				setIsGenresUpdating(false);
			})

			.catch((error) => {
				setIsGenresUpdating(false);
				console.log(error);
			});
	};

	return (
		<div className={style.overview}>
			<h3 className={style.title_section}>Description</h3>

			<Form
				onSubmit={onDescriptionSubmit}
				initialValues={descriptionInitialValues}
				className={style.form_section}
			>
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
					isLoading={isDescriptionUpdating}
					className={style.submit}
				/>
			</Form>

			<h3 className={style.title_section}>More information</h3>

			<Form
				onSubmit={onAdditionalSubmit}
				initialValues={additionalInitialValues}
				className={style.form_section}
			>
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
					isLoading={isAdditionalUpdating}
					className={style.submit}
				/>
			</Form>

			<h3 className={style.title_section}>Genres</h3>

			<Form
				onSubmit={onGenresSubmit}
				initialValues={genresInitialValues}
				className={style.form_section}
			>
				<Input name="genres">
					<GenresField className={style.genres} />
				</Input>

				<BasicButton
					type="submit"
					text="Update"
					isLoading={isGenresUpdating}
					className={style.submit}
				/>
			</Form>
		</div>
	);
};

export default Overview;
