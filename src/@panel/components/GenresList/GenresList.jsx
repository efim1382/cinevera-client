import React from "react";
import PropTypes from "prop-types";
import GenreItem from "./GenreItem";
import style from "./style.css";

const GenresList = (props) => {
	const { items } = props;

	return (
		<div className={style.genres_list}>
			{items.map((item) => (
				<GenreItem key={item} code={item} className={style.item} />
			))}
		</div>
	);
};

GenresList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenresList;
