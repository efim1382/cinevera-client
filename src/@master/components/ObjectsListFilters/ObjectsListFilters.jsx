import React, { useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Dropdown from "./Dropdown";
import { genres, getGenreByCode } from "config/genres";
import style from "./style.css";
import { ObjectsListContext } from "@master/store/ObjectsListProvider";

const cx = classnames.bind(style);

const ObjectsListFilters = ({ className }) => {
	const { state, actions } = useContext(ObjectsListContext);

	const {
		isRequestProcess,
		sort,
		genres: selectedGenres,
	} = state;

	/**
	 * Label for dropdown contains selected genres
	 * Max items 4
	 * For example: Thriller, Crime, Comedy, Drama
	 * Dropdown button has max-width: 200px, so it will look like "Thriller, Crime, Com..."
	 */
	const genresLabel = selectedGenres.length === 0
		? "All"

		: selectedGenres
			.slice(0, 4)
			.map((value) => getGenreByCode(value).label)
			.join(", ");

	/**
	 * genresOptions looks like
	 *
	 * [
	 *   "All",
	 *   ...Selected Genres
	 *   ...Other Genres
	 * ]
	 */
	const genresOptions = selectedGenres
		.map((item) => {
			const genre = getGenreByCode(item);

			return {
				...genre,
				className: style.is_genre_selected,
			};
		})

		.concat(genres.filter((item) => selectedGenres.indexOf(item.value) === -1))

		.map((item) => ({
			...item,
			icon: "mark",
			className: cx("genre_item", item.className),
		}));

	genresOptions.unshift({
		value: "",
		label: "All",
	});

	const sortOptions = [
		{ value: "recommended", label: "Recommended" },
		{ value: "year", label: "Year" },
	];

	const sortLabel = sortOptions.find((item) => item.value === sort).label;

	const onChangeGenre = (item) => {
		actions.filterObjectsByGenre(item.value);
	};

	const onSortChange = (item) => {
		actions.sortObjects(item.value);
	};

	return (
		<div className={cx("filters", className)}>
			<div className="container">

				<div className={style.dropdown_wrapper}>
					<span className={style.label}>Genre:</span>

					<Dropdown
						label={genresLabel}
						options={genresOptions}
						onChange={onChangeGenre}
						className={style.dropdown}
						isDisabled={isRequestProcess}
					/>
				</div>

				<div className={style.dropdown_wrapper}>
					<span className={style.label}>Sort By:</span>

					<Dropdown
						label={sortLabel}
						options={sortOptions}
						onChange={onSortChange}
						className={style.dropdown}
						isDisabled={isRequestProcess}
					/>
				</div>
			</div>
		</div>
	);
};

ObjectsListFilters.propTypes = {
	className: PropTypes.string,
};

export default ObjectsListFilters;
