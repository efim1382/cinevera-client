import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			<div className={style.title} />

			<div className={style.tabs}>
				<div className={style.tab} />
				<div className={style.tab} />
			</div>
		</div>
	);
};

export default Suspense;
