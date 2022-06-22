import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			<div className={style.title} />

			<div className={style.row}>
				<div className={style.label} />
				<div className={style.value} />
			</div>

			<div className={style.row}>
				<div className={style.label} />
				<div className={style.value} />
			</div>

			<div className={style.row}>
				<div className={style.label} />
				<div className={style.value} />
			</div>
		</div>
	);
};

export default Suspense;
