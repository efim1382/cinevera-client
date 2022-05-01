import React, { useEffect } from "react";
import Icon from "components/Icon";
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
				<div className={style.search_container}>
					<Icon name="search" />
					<input type="text" placeholder="Search" className={style.input} />
				</div>
			</div>
		</div>
	);
};

export default MobileOverlay;
