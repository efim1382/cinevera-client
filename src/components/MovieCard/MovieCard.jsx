import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import Icon from "components/Icon";
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
			<div className={style.description_film}>
				<p className={ style.name_film}>Fight Club</p>
				<button className={style.button_star}>
					<Icon name="star" />
				</button>
				<div className={style.film_info}>
					<span className={style.film_year}>1997</span>
					<span className={style.film_genre}>Thriller</span>
					<span className={style.film_duration}>139</span>
				</div>
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
