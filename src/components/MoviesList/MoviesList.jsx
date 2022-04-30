import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const MoviesList = (props) => {
	const {
		className,
		children,
	} = props;

	return (
		<div className={cx("movies_list", className)}>
			<div className="container">
				{children}
			</div>
		</div>
	);
};

MoviesList.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default MoviesList;
