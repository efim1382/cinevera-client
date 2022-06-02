import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const TextField = (props) => {
	const {
		type,
		value,
		error,
		helperText,
		onFocus,
		onBlur,
		onChange,
		onInput,
		label,
		icon,
		maxLength,
		placeholder,
		isReadOnly,
		isDisabled,
		isActive,
		className,
		getRef,
	} = props;

	const [isFocused, setIsFocused] = useState(false);
	const isFieldActive = isFocused || !!value || isActive;
	const isHelperTextShown = helperText && !error;

	const inputProps = {};

	if (isReadOnly) {
		inputProps["readOnly"] = true;
	}

	if (isDisabled) {
		inputProps["disabled"] = true;
	}

	const inputClassName = useMemo(() => (
		cx(
			"field_container",
			className,

			{
				"_is-error": error,
				"_is-active": isFieldActive,
				"_is-icon": !!icon,
			},
		)
	), [error, isFieldActive, icon, className]);

	const handleInput = (event) => {
		if (onInput) {
			onInput(event);
		}
	};

	const handleChange = (event) => {
		console.log(event.target.value);

		if (onChange) {
			onChange(event);
		}
	};

	const handleFocus = (event) => {
		if (onFocus) {
			onFocus(event);
		}

		setIsFocused(true);
	};

	const handleBlur = (event) => {
		if (onBlur) {
			onBlur(event);
		}

		setIsFocused(false);
	};

	return (
		<div className={inputClassName} ref={getRef}>
			<label className={style.input_section}>
				{label && (
					<p className={style.label}>{label}</p>
				)}

				{icon && (
					<Icon name={icon} />
				)}

				<input
					type={type}
					value={value}
					onInput={handleInput}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder={placeholder}
					maxLength={maxLength}
					className={style.input}
					{...inputProps}
				/>
			</label>

			<div className={style.helper_container}>
				{isHelperTextShown && (
					<p className={style.helper_text}>{helperText}</p>
				)}

				{error && (
					<p className={style.error_text}>{error}</p>
				)}
			</div>
		</div>
	);
};

TextField.defaultProps = {
	type: "text",
	isReadOnly: false,
	isDisabled: false,
};

TextField.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	helperText: PropTypes.string,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onInput: PropTypes.func,
	label: PropTypes.string,
	maxLength: PropTypes.string,
	getRef: PropTypes.any,
	isActive: PropTypes.bool,
	isDisabled: PropTypes.bool,
	icon: PropTypes.string,
	isReadOnly: PropTypes.bool,
	placeholder: PropTypes.string,
	className: PropTypes.string,
};

export default TextField;
