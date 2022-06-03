import React from "react";
import style from "./style.css";

const Suspense = () => {
	return (
		<div className={style.suspense}>
			{[0, 1, 2, 3, 4, 5].map((item) => (
				<div key={item} className={style.row}>
					<div className={style.cell} />
					<div className={style.cell} />
					<div className={style.cell} />
					<div className={style.cell} />
					<div className={style.cell} />
				</div>
			))}
		</div>
	);
};

export default Suspense;
