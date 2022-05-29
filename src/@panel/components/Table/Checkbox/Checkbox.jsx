import React from "react";
import Icon from "components/Icon";
import style from "./style.css";

const Checkbox = () => {
	return (
		<label className={style.checkbox}>
			<input type="checkbox" className={style.input} />

			<div className={style.box}>
				<Icon name="done" />
			</div>
		</label>
	);
};

export default Checkbox;
