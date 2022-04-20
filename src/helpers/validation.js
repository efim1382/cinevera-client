import validators from "components/Form/validators";

/**
 *
 * @param error
 * @returns {{}}
 */
export const validateApiError = (error) => {
	if (
		error
    && error.validation
    && error.validation.constructor === Object
    && Object.keys(error.validation).length > 0
	) {
		const validationObject = {};

		Object.entries(error.validation).forEach(([key, item]) => {
			validationObject[key] = item.message;
		});

		return validationObject;
	}
};

/**
 *
 * @param {Function} callback
 * @returns {function(...[*]=)}
 */
export const withValidationHandling = (callback) => (error) => {
	if (callback && typeof callback === "function") {
		callback(error);
	}

	return validateApiError(error);
};

/**
 *
 * @param {any} value
 * @param {Array} validations
 * @returns {string}
 */
export const validateField = (value = "", validations) => {
	let error = "";

	if (!validations) {
		return "";
	}

	if (validations.constructor && validations.constructor === Object) {
		validations = [validations];
	}

	for (let i = 0; i < validations.length; i++) {
		const {
			message,
			param,
			validator,
		} = validations[i];

		if (validators[validator](value, param)) {
			error = message;
			break;
		}
	}

	return error;
};

/**
 *
 * @param {Object} values
 * @param {Array} validations
 * @returns {{}}
 */
export const validateForm = (values = {}, validations) => {
	if (!validations) {
		return {};
	}

	if (!values.constructor || values.constructor !== Object) {
		return {};
	}

	if (!validations.constructor || validations.constructor !== Object || Object.keys(validations).length === 0) {
		return {};
	}

	const errors = {};

	for (const [key, validator] of Object.entries(validations)) {
		const error = validateField(values[key], validator);

		if (error) {
			errors[key] = error;
		}
	}

	return errors;
};
