import React from "react";
import PropTypes from "prop-types";
import { Form as FormComponent } from "react-final-form";
import { validateForm } from "helpers/validation";

const Form = (props) => {
	const {
		className,
		children,
		onSubmit,
		initialValues,
		validations,
	} = props;

	const validate = (values) => validateForm(values, validations);

	return (
		<FormComponent
			onSubmit={onSubmit}
			validate={validate}
			initialValues={initialValues}

			render={({ handleSubmit }) => {
				return (
					<form
						onSubmit={handleSubmit}
						className={className}
					>
						{children}
					</form>
				);
			}}
		/>
	);
};

Form.defaultProps = {
	onSubmit: Function(),
	validations: {},
	initialValues: {},
};

Form.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
	onSubmit: PropTypes.func,
	initialValues: PropTypes.object,
	validations: PropTypes.object,
};

export default Form;
