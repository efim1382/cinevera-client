import React from "react";
import Subheader from "@panel/components/Subheader";
import Table from "@panel/components/Table";
import style from "./style.css";

const Series = () => {
	return (
		<main className={style.series}>
			<Subheader
				title="Series list"
				className={style.subheader}
			/>

			<Table className={style.table} />
		</main>
	);
};

export default Series;
