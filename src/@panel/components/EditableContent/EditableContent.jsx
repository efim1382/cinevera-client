import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const EditableContent = (props) => {
	const {
		defaultValue,
		onBlur,
		className,
	} = props;

	const handleOnBlur = (event) => {
		if (!event.target.innerText || event.target.innerText === defaultValue) {
			return;
		}

		onBlur(event.target.innerText);
	};

	return (
		<p
			contentEditable
			suppressContentEditableWarning
			onBlur={handleOnBlur}
			className={cx("editable", className)}
		>
			{defaultValue}
		</p>
	);
};

EditableContent.defaultProps = {
	onBlur: Function(),
};

EditableContent.propTypes = {
	defaultValue: PropTypes.string.isRequired,
	onBlur: PropTypes.func,
	className: PropTypes.string,
};

export default EditableContent;
