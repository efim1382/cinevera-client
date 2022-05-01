import React, { useEffect } from "react";
import style from "./style.css";

const MobileOverlay = () => {
	useEffect(() => {
		document.body.style.setProperty("overflow", "hidden");

		return () => {
			document.body.style.removeProperty("overflow");
		};
	}, []);

	return (
		<div className={style.overlay}>
			<div className={style.content}>
			</div>
		</div>
	);
};

export default MobileOverlay;
