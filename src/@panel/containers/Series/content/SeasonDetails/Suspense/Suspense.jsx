import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			<div className={style.button} />
			<div className={style.title} />
			<div className={style.text} />
			<div className={style.background} />
		</div>
	);
};

export default Suspense;
