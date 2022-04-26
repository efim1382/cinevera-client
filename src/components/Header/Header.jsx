import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.css";
import Icon from "components/Icon";

const Header = () => {
	return (
		<header className={style.header}>
			<NavLink to="/" className={style.logo}>
				<h1>Cinevera</h1>
			</NavLink>

			<button className={style.profile_button}>
				<Icon name="account_circle" />
			</button>
		</header>
	);
};

export default Header;
