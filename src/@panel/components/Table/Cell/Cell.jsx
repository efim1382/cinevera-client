import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Cell = ({ className, width, children }) => {
	const inline = {};

	if (width) {
		inline["--width"] = width;
	}

	return (
		<div style={inline} className={cx("cell", className)}>
			{children}
		</div>
	);
};

Cell.propTypes = {
	width: PropTypes.number,
	className: PropTypes.string,
	children: PropTypes.any,
};

export default Cell;
