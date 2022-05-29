import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Icon from "components/Icon";
import Cell from "@panel/components/Table/Cell";
import style from "./style.css";

const cx = classnames.bind(style);

const HeadingCell = ({ text, className, ...props }) => {
	return (
		<Cell {...props} className={cx("heading_cell", className)}>
			<p>{text}</p>
			<Icon name="play_arrow" />
		</Cell>
	);
};

HeadingCell.propTypes = {
	width: PropTypes.number,
	className: PropTypes.string,
	text: PropTypes.string,
};

export default HeadingCell;
