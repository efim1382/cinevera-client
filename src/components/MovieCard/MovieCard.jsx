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
		<NavLink to={link} className={cx("movie_card", className)} style={inline}>
			<div className={style.content}>
				<p className={style.name}>Fight Club</p>

				<div className={style.score_film}>
					<p className={style.rating}>9.3</p>
					<div className={style.lane_box}>
						<div className={style.score_line} />
					</div>
				</div>

				<p className={style.description}>
					"The first rule of Fight Club is: you do not talk about Fight Club.
					 The second rule of Fight Club is: you DO NOT talk about Fight Club!" - Tyler Durden
				</p>

				<p className={style.film_info}>1997 year 139 min<br />Thriller</p>
			</div>
		</NavLink>
	);
};

MovieCard.propTypes = {
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default MovieCard;
