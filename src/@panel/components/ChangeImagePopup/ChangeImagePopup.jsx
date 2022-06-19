import React, { useState } from "react";
import PropTypes from "prop-types";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import validations from "./validations";
import style from "./style.css";

const ChangeImagePopup = (props) => {
	const {
		fieldName,
		onSubmit,
		onClose,
	} = props;

	const [isUpdating, setIsUpdating] = useState(false);

	const imageValidations = {
		[fieldName]: validations.image,
	};

	const handleSubmit = (values) => {
		setIsUpdating(true);

		onSubmit(values)
			.then(() => {
				setIsUpdating(false);
				onClose();
			});
	};

	return (
		<Overlay onClose={onClose}>
			<Form onSubmit={handleSubmit} validations={imageValidations} className={style.form}>
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
	onSubmit: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	fieldName: PropTypes.string.isRequired,
};

export default ChangeImagePopup;
