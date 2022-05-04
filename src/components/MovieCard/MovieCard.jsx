import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import * as moviesSelectors from "selectors/movies.selectors";
import { getGenreByCode } from "config/genres";
import style from "./style.css";

const cx = classnames.bind(style);

const MovieCard = (props) => {
	const {
		id,
		className,
	} = props;

	const isLoaded = useSelector(moviesSelectors.isMovieLoaded(id));
	const data = useSelector(moviesSelectors.getMovieData(id));

	const {
		name,
		shortDescription,
		preview,
		year,
		genres = [],
	} = data;

	const formattedGenres = genres
		.map((code) => getGenreByCode(code).label || code)
		.join(", ");

	const Component = isLoaded
		? NavLink
		: "div";

	let wrapperProps = {};

	if (isLoaded) {
		wrapperProps = {
			to: `/movies/details/${id}`,
			style: { backgroundImage: `url("${preview}")` },
		};
	}

	return (
		<Component className={cx("movie_card", className)} {...wrapperProps}>
			{isLoaded && (
				<div className={style.content}>
					<p className={style.name}>{name}</p>

					<div className={style.score_film}>
						<p className={style.rating}>9.3</p>

						<div className={style.lane_box}>
							<div className={style.score_line} />
						</div>
					</div>

					{shortDescription && (
						<p className={style.description}>{shortDescription}</p>
					)}

					<p className={style.film_properties}>{year} year</p>
					<p className={style.film_properties}>{formattedGenres}</p>
				</div>
			)}
		</Component>
	);
};

MovieCard.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	className: PropTypes.string,
};

export default MovieCard;
