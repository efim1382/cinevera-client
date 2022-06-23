import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Checkbox = (props) => {
	const {
		isChecked,
		onChange,
		className,
	} = props;

	return (
		<label className={cx("checkbox", className)}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={onChange}
				className={style.input}
			/>

			<div className={style.box}>
				<Icon name="done" />
			</div>
		</label>
	);
};

Checkbox.defaultProps = {
	onChange: Function(),
	isChecked: false,
};

Checkbox.propTypes = {
	isChecked: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default Checkbox;
