import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getGenreByCode } from "config/genres";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const DetailsPageOverview = (props) => {
	const {
		description,
		genres,
		className,
	} = props;

	const isGenresExist = genres.length > 0;

	return (
		<section className={cx("overview", className)}>
			<div className="container">
				<div className={style.section}>
					<h2 className={style.subtitle}>Overview</h2>
					<p className={style.text}>{description}</p>
				</div>

				<div className={style.genres}>
					<h2 className={style.subtitle}>Genres</h2>

					{isGenresExist && (
						genres.map((code) => {
							const { label } = getGenreByCode(code) || {};

							if (!label) {
								return null;
							}

							return (
								<NavLink key={code} to="/" className={style.item}>{label}</NavLink>
							);
						})
					)}
				</div>
			</div>
		</section>
	);
};

DetailsPageOverview.defaultProps = {
	genres: [],
};

DetailsPageOverview.propTypes = {
	description: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string),
	className: PropTypes.string,
};

export default DetailsPageOverview;
