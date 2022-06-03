import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const TextField = (props) => {
	const {
		value,
		error,
		helperText,
		onFocus,
		onBlur,
		onChange,
		label,
		icon,
		placeholder,
		className,
	} = props;

	const [isFocused, setIsFocused] = useState(false);

	const isActive = isFocused || !!value;
	const isHelperTextShown = helperText && !error;

	const inputClassName = useMemo(() => (
		cx(
			"textarea_container",
			className,

			{
				"_is-error": error,
				"_is-active": isActive,
				"_is-icon": !!icon,
			},
		)
	), [error, isActive, icon, className]);

	const handleChange = (event) => {
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
		<div className={inputClassName}>
			<label className={style.input_section}>
				{label && (
					<p className={style.label}>{label}</p>
				)}

				{icon && (
					<Icon name={icon} />
				)}

				<textarea
					placeholder={placeholder}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={value}
					className={style.input}
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

TextField.propTypes = {
	value: PropTypes.string,
	error: PropTypes.string,
	helperText: PropTypes.string,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	label: PropTypes.string,
	icon: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
};

export default TextField;
