import React from "react";
import style from "./style.css";

const ObjectsListSuspense = () => {
	return (
		<div className={style.suspense}>
			<div className="container">
				<div className={style.title} />

				<div className={style.filters}>
					<div className={style.item} />
					<div className={style.item} />
				</div>
			</div>
		</div>
	);
};

export default ObjectsListSuspense;
