import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import * as moviesSelectors from "selectors/movies.selectors";
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
		description,
		preview,
	} = data;

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

					{description && (
						<p className={style.description}>{description}</p>
					)}

					<p className={style.film_properties}>1997 year 139 min</p>
					<p className={style.film_properties}>Thriller</p>
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
