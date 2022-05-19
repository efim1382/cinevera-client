import React from "react";
import style from "./style.css";

const ObjectsListSuspence = () => {
	return (
		<div className={style.suspence}>
			<div className="container">
				<div className={style.title} />
				<div className={style.filters} />
			</div>
		</div>
	);
};

export default ObjectsListSuspence;
