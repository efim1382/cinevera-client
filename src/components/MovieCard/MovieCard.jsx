import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const MovieCard = (props) => {
	const {
		image,
		link,
		className,
	} = props;

	const inline = { backgroundImage: `url("${image}")` };

	return (
		<NavLink to={link} className={cx("movie_card", className)} style={inline} />
	);
};

MovieCard.propTypes = {
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default MovieCard;
