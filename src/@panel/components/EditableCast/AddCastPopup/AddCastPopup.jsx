import React, { useState } from "react";
import PropTypes from "prop-types";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import CastField from "@panel/components/FormElements/CastField";
import validations from "./validations";
import style from "./style.css";

const AddCastPopup = (props) => {
	const {
		onSubmit,
		onClose,
	} = props;

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (values) => {
		setIsLoading(true);

		onSubmit(values)
			.then(() => {
				setIsLoading(false);
				onClose();
			});
	};

	return (
		<Overlay onClose={onClose}>
			<Form className={style.form} onSubmit={handleSubmit} validations={validations}>
				<Input name="cast">
					<CastField className={style.cast_field} />
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

AddCastPopup.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default AddCastPopup;
