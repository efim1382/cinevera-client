import React from "react";
import style from "./style.css";

const MovieDetailsSuspence = () => {
	return (
		<div className={style.suspence}>
			<div className="container">
				<div className={style.title} />
				<div className={style.description} />
				<div className={style.button} />
				<div className={style.subtitle} />
				<div className={style.text} />
			</div>
		</div>
	);
};

export default MovieDetailsSuspence;
