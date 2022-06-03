import React from "react";
import TableSuspense from "@panel/components/Table/Suspense";
import style from "./style.css";

const ManageListSuspense = () => {
	return (
		<div className={style.suspense}>
			<div className={style.header}>
				<div className={style.title} />
				<div className={style.button} />
			</div>

			<TableSuspense />
		</div>
	);
};

export default ManageListSuspense;
