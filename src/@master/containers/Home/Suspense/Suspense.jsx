import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			<div className="container">
				<div className={style.title} />
				<div className={style.text} />

				<div className={style.actions}>
					<div className={style.action} />
					<div className={style.action} />
				</div>
			</div>
		</div>
	);
};

export default Suspense;
