import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Loading = ({ appearance, className }) => {
	return (
		<div className={cx("loading", className)} appearance={appearance} />
	);
};

Loading.defaultProps = {
	appearance: "transparent",
};

Loading.propTypes = {
	appearance: PropTypes.oneOf(["transparent", "primary"]),
	className: PropTypes.string,
};

export default Loading;
