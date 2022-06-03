import React from "react";
import PropTypes from "prop-types";
import { getGenreByCode } from "config/genres";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const GenreItem = (props) => {
	const { code, className } = props;
	const name = getGenreByCode(code)?.label || "";

	return (
		<span data-genre={code} className={cx("genre", className)}>{name}</span>
	);
};

GenreItem.propTypes = {
	code: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default GenreItem;
