import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

const Input = ({ name, type, children, ...inputProps }) => {
	if (children.constructor === Array) {
		console.error(`Input "${name}" has few children elements. There will be rendered only first item of array`);
		children = children[0];
	}

	return (
		<Field name={name} type={type}>
			{
				({ input, meta }) => {
					const {
						checked: isChecked,
						...fieldInputProps
					} = input;

					const error = (meta.error || meta.submitError) && meta.touched
						? meta.error || meta.submitError
						: "";

					return cloneElement(children, {
						error,
						meta,
						isChecked,
						...fieldInputProps,
						...inputProps,
					});
				}
			}
		</Field>
	);
};

Input.defaultProps = {
	type: "text",
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Input;
