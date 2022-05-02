import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const MovieCard = (props) => {
	const {
		name,
		description,
		image,
		link,
		className,
	} = props;

	const inline = { backgroundImage: `url("${image}")` };

	return (
		<NavLink to={link} className={cx("movie_card", className)} style={inline}>
			<div className={style.content}>
				<p className={style.name}>{name}</p>

				<div className={style.score_film}>
					<p className={style.rating}>9.3</p>
					<div className={style.lane_box}>
						<div className={style.score_line} />
					</div>
				</div>

				{description && (
					<p className={style.description}>{description}</p>
				)}

				<p className={style.film_properties}>1997 year 139 min</p>
				<p className={style.film_properties}>Thriller</p>
			</div>
		</NavLink>
	);
};

MovieCard.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default MovieCard;
