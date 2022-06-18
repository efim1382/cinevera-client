import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import GenresField from "@panel/components/FormElements/GenresField";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

const AddGenresPopup = (props) => {
	const {
		onClose,
	} = props;

	const { id: movieId } = useParams();
	const { state, actions } = useContext(MovieDetailsContext);
	const { data } = state;
	const { genres = [] } = data;
	const [isUpdating, setIsUpdating] = useState(false);

	const onSubmit = (values) => {
		setIsUpdating(true);

		updateMovie(movieId, { genres: [...genres, ...values.genres] })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsUpdating(false);
				onClose();
			})
			.catch((error) => {
				setIsUpdating(false);
				console.log(error);
			});
	};

	return (
		<Overlay onClose={onClose}>
			<Form onSubmit={onSubmit} className={style.form}>
				<Input name="genres">
					<GenresField exclude={genres} className={style.input} />
				</Input>

				<BasicButton
					type="submit"
					text="Submit"
					isLoading={isUpdating}
					className={style.submit}
				/>
			</Form>
		</Overlay>
	);
};

AddGenresPopup.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default AddGenresPopup;
