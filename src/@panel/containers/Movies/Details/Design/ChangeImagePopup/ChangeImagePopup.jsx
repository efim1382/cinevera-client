import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import validations from "./validations";
import style from "./style.css";

const ChangeImagePopup = (props) => {
	const {
		fieldName,
		onClose,
	} = props;

	const { id: movieId } = useParams();
	const { actions } = useContext(MovieDetailsContext);
	const [isUpdating, setIsUpdating] = useState(false);

	const imageValidations = {
		[fieldName]: validations.image,
	};

	const onSubmit = (values) => {
		setIsUpdating(true);

		updateMovie(movieId, values)
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
			<Form onSubmit={onSubmit} validations={imageValidations} className={style.form}>
				<Input name={fieldName}>
					<TextField
						autoFocus
						label="Image url"
						placeholder="https://domain.com/image.jpeg"
						className={style.input}
					/>
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

ChangeImagePopup.propTypes = {
	onClose: PropTypes.func.isRequired,
	fieldName: PropTypes.string.isRequired,
};

export default ChangeImagePopup;
