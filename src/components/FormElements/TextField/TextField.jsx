import React, { useState } from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import style from "./style.css";

const cx = classnames.bind(style);

const TextField = (props) => {
	const {
		meta,
		error,
		label,
		className,
		icon,
		value,
		type,
		...inputProps
	} = props;

	const [isPasswordVisible, setPasswordVisibility] = useState(false);
	const isActive = meta.active || !!value;
	const cxModificators = { "_is-error": !!error, "_is-active": isActive, "_is-icon": !!icon };
	const isFieldPassword = type === "password";

	const fieldType = isFieldPassword && isPasswordVisible
		? "text"
		: type;

	const onVisibilityPasswordChange = () => setPasswordVisibility(!isPasswordVisible);

	return (
		<div className={cx(style.input_container, className, cxModificators)}>
			<label className={style.input_section}>
				{icon && (
					<Icon name={icon} className={style.icon} />
				)}

				{label && (
					<p className={style.label}>{label}</p>
				)}

				<input
					type={fieldType}
					value={value}
					className={style.input}
					{...inputProps}
				/>

				{isFieldPassword && (
					<button type="button" className={style.visibility_pass} onClick={onVisibilityPasswordChange}>
						{!isPasswordVisible && (
							<Icon name="visibility_off" />
						)}

						{isPasswordVisible && (
							<Icon name="visibility" />
						)}
					</button>
				)}
			</label>

			<div className={style.error_container}>
				{error && (
					<p className={style.text}>{error}</p>
				)}
			</div>
		</div>
	);
};

TextField.defaultProps = {
	onFocus: Function(),
	onChange: Function(),
	onBlur: Function(),
	meta: {},
	value: "",
	error: "",
	type: "text",
};

TextField.propTypes = {
	onFocus: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	meta: PropTypes.object,
	value: PropTypes.string,
	error: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(["text", "password", "email"]),
	icon: PropTypes.string,
};

export default TextField;
