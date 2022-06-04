import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import * as moviesSelectors from "selectors/movies.selectors";
import { getGenreByCode } from "config/genres";
import { formatSeriesYear } from "helpers/movieHelpers";
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
		title,
		shortDescription,
		posterUrl,
		year = [],
		genres = [],
		objectType = "movie",
	} = data;

	const formattedYear = useMemo(() => (
		objectType === "series"
			? formatSeriesYear(year)
			: year[0]
	), [year.length, objectType]);

	const link = objectType === "movie"
		? `/movies/details/${id}`
		: `/series/details/${id}/season/1`;

	const formattedGenres = genres
		.map((code) => getGenreByCode(code).label || code)
		.join(", ");

	const Component = isLoaded
		? NavLink
		: "div";

	let wrapperProps = {};

	if (isLoaded) {
		wrapperProps = {
			to: link,
			style: { backgroundImage: `url("${posterUrl}")` },
		};
	}

	return (
		<Component className={cx("movie_card", className)} {...wrapperProps}>
			{isLoaded && (
				<div className={style.content}>
					<p className={style.name}>{title}</p>

					<div className={style.score_film}>
						<p className={style.rating}>9.3</p>

						<div className={style.lane_box}>
							<div className={style.score_line} />
						</div>
					</div>

					{shortDescription && (
						<p className={style.description}>{shortDescription}</p>
					)}

					<p className={style.film_properties}>{formattedYear}</p>
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
