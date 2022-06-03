import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Select from "components/FormElements/Select";
import Icon from "components/Icon";
import { genres, getGenreByCode } from "config/genres";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Genres = (props) => {
	const {
		value,
		error,
		onChange,
		className,
	} = props;

	const formattedValue = typeof value === "object" && value.constructor === Array
		? value
		: [];

	const isSelectedGenresExist = formattedValue.length > 0;

	const filteredOptions = useMemo(() => (
		genres
			.filter((genre) => formattedValue.indexOf(genre.value) === -1)
			.sort((a, b) => a.label.localeCompare(b.label))
	), [formattedValue]);

	const handleChange = (value) => {
		if (onChange && formattedValue.indexOf(value) === -1) {
			onChange([...formattedValue, value]);
		}
	};

	const handleRemove = (value) => {
		if (onChange && formattedValue.indexOf(value) !== -1) {
			onChange(formattedValue.filter((item) => item !== value));
		}
	};

	return (
		<div className={cx("genres_container", className)}>
			<Select
				label="Genres"
				options={filteredOptions}
				onChange={handleChange}
				error={error}
			/>

			{isSelectedGenresExist && (
				<div className={style.genres_list}>
					{value.map((item) => {
						const genre = getGenreByCode(item)?.label;

						const onClick = () => {
							handleRemove(item);
						};

						return (
							<button key={item} type="button" className={style.item} onClick={onClick}>
								<p className={style.caption}>{genre}</p>
								<Icon name="close" />
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

Genres.defaultProps = {
	value: [],
};

Genres.propTypes = {
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	error: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default Genres;
