import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Switcher = (props) => {
	const {
		isChecked,
		onChange,
		isDisabled,
		className,
	} = props;

	const additionalProps = {};

	if (isDisabled) {
		additionalProps["disabled"] = true;
	}

	return (
		<label className={cx("switcher", className, { "_is-disabled": isDisabled })}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={onChange}
				className={style.input}
				{...additionalProps}
			/>

			<div className={style.box} />
		</label>
	);
};

Switcher.defaultProps = {
	onChange: Function(),
	isChecked: false,
	isDisabled: false,
};

Switcher.propTypes = {
	isChecked: PropTypes.bool,
	isDisabled: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default Switcher;
