import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const LoadingDots = (props) => {
	const { className } = props;

	return (
		<div className={cx("loading", className)} />
	);
};

LoadingDots.propTypes = {
	className: PropTypes.string,
};

export default LoadingDots;
