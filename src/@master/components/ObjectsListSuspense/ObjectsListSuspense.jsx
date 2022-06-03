import React from "react";
import style from "./style.css";

const ObjectsListSuspense = () => {
	return (
		<div className={style.suspense}>
			<div className="container">
				<div className={style.title} />
				<div className={style.filters} />
			</div>
		</div>
	);
};

export default ObjectsListSuspense;
