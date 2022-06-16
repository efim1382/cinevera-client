import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Subheader from "@panel/components/Subheader";
import Table, { DefaultCell } from "@panel/components/Table";
import Cell from "@panel/components/Table/Cell";
import GenresItem from "@panel/components/GenreItem";
import { getMovies } from "@panel/api/movies.api";
import * as config from "./config";
import style from "./style.css";

export const renderCell = (props) => {
	const {
		heading,
		data,
	} = props;

	const value = data[heading.key];

	if (heading.key === config.KEY_TITLE) {
		return (
			<Cell width={heading.width}>
				<NavLink to={`/panel/movies/${data.id}/`}>{value}</NavLink>
			</Cell>
		);
	}

	if (heading.key === config.KEY_GENRES) {
		const isMoreThanTwo = value.length > 2;
		const moreCount = value.splice(2).length;
		const visibleGenres = value.splice(0, 2);

		return (
			<Cell width={heading.width}>
				{visibleGenres.map((item) => (
					<GenresItem key={item} code={item} className={style.genre} />
				))}

				{isMoreThanTwo && (
					<span className={style.more_genres}>+{moreCount}</span>
				)}
			</Cell>
		);
	}

	if (heading.key === config.KEY_YEAR) {
		return (
			<Cell width={heading.width}>
				<p>{value[0]}</p>
			</Cell>
		);
	}

	if (heading.key === config.KEY_AGE_LIMIT) {
		return (
			<Cell width={heading.width}>
				<p>{value}+</p>
			</Cell>
		);
	}

	return (
		<DefaultCell {...props} />
	);
};

renderCell.propTypes = DefaultCell.propTypes;

const Movies = () => {
	const [items, setItems] = useState([]);
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	useEffect(() => {
		setIsRequestProcess(true);

		getMovies()
			.then(({ result }) => {
				setItems(result);
			})

			.catch((error) => {
				console.log(error);
			})

			.finally(() => {
				setIsRequestProcess(false);
			});
	}, []);

	return (
		<main className={style.movies}>
			<Subheader
				title="Movies list"
				to="/panel/movies/new/"
				className={style.subheader}
			/>

			<Table
				headings={config.headings}
				items={items}
				renderCell={renderCell}
				isLoading={isRequestProcess}
				className={style.table}
			/>
		</main>
	);
};

export default Movies;
