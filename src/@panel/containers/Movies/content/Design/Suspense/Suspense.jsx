import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			<div className={style.title} />
			<div className={style.caption} />
			<div className={style.image} />
		</div>
	);
};

export default Suspense;
