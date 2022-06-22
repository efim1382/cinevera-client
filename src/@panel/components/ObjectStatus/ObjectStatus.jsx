import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const STATUSES = {
	visible: "Visible",
	hidden: "Hidden",
};

const ObjectStatus = (props) => {
	const { code, className } = props;
	const text = STATUSES[code];

	return (
		<p data-type={code} className={cx("status", className)}>{text}</p>
	);
};

ObjectStatus.propTypes = {
	code: PropTypes.oneOf(["visible", "hidden"]).isRequired,
	className: PropTypes.string,
};

export default ObjectStatus;
