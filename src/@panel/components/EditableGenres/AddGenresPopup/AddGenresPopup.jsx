import React, { useState } from "react";
import PropTypes from "prop-types";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import GenresField from "@panel/components/FormElements/GenresField";
import style from "./style.css";

const AddGenresPopup = (props) => {
	const {
		onClose,
		onSubmit,
		exclude,
	} = props;

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (values) => {
		setIsLoading(true);

		onSubmit(values)
			.then(() => {
				setIsLoading(false);
			});
	};

	return (
		<Overlay onClose={onClose}>
			<Form onSubmit={handleSubmit} className={style.form}>
				<Input name="genres">
					<GenresField exclude={exclude} className={style.input} />
				</Input>

				<BasicButton
					type="submit"
					text="Submit"
					isLoading={isLoading}
					className={style.submit}
				/>
			</Form>
		</Overlay>
	);
};

AddGenresPopup.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	exclude: PropTypes.array,
};

export default AddGenresPopup;
