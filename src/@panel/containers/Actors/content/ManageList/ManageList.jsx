import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ManageListHeader from "@panel/components/ManageListHeader";
import Table, { DefaultCell } from "@panel/components/Table";
import { getActorsList } from "@panel/api/actors.api";
import Cell from "@panel/components/Table/Cell";
import * as config from "./config";
import style from "./style.css";

export const renderCell = (props) => {
	const {
		heading,
		data,
	} = props;

	if (heading.key === config.KEY_ACTOR) {
		const inline = { backgroundImage: `url(${data.photo})` };

		return (
			<Cell width={heading.width}>
				<NavLink to={`/panel/actors/${data.id}/`} className={style.actor_cell}>
					<div className={style.photo} style={inline} />
					<p className={style.name}>{data.name}</p>
				</NavLink>
			</Cell>
		);
	}

	return (
		<DefaultCell {...props} />
	);
};

renderCell.propTypes = DefaultCell.propTypes;

const ManageList = () => {
	const [items, setItems] = useState([]);
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	useEffect(() => {
		setIsRequestProcess(true);

		getActorsList()
			.then(({ actors }) => {
				setItems(actors);
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
				title="Actors List"
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

export default ManageList;
