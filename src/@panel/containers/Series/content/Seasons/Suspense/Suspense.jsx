import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			<div className={style.title} />

			<div className={style.list}>
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
				<div className={style.item} />
			</div>
		</div>
	);
};

export default Suspense;
