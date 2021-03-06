import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ManageListHeader from "@panel/components/ManageListHeader";
import ObjectStatus from "@panel/components/ObjectStatus";
import Table, { DefaultCell } from "@panel/components/Table";
import Cell from "@panel/components/Table/Cell";
import GenresItem from "@panel/components/GenreItem";
import { queryParam } from "@panel/containers/AddObjectOverlay";
import { getSeries } from "@panel/api/movies.api";
import * as config from "./config";
import { formatSeriesYear } from "helpers/movieHelpers";
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
				<NavLink to={`/panel/series/${data.id}/`}>{value}</NavLink>
			</Cell>
		);
	}

	if (heading.key === config.KEY_STATUS) {
		return (
			<Cell width={heading.width}>
				<ObjectStatus code={value} />
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
		const formattedYear = formatSeriesYear(value);

		return (
			<Cell width={heading.width}>
				<p>{formattedYear}</p>
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

const SeriesList = () => {
	const [items, setItems] = useState([]);
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	const createMovieLink = { search: `?${queryParam}=series` };

	useEffect(() => {
		setIsRequestProcess(true);

		getSeries()
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
		<main className={style.series}>
			<ManageListHeader
				title="Series list"
				to={createMovieLink}
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

export default SeriesList;
