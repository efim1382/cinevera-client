import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import style from "./style.css";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.sidebar}>
				<NavLink to="/" className={style.logo}>cinevera</NavLink>

				<div className={style.description}>
					<span>
						Done. Everything is collected here.
						And this "everything" is done for you in the best possible way.
					</span>
				</div>

				<div className={style.link_container}>
					<button className={style.social_button}>
						<Icon name="facebook" />
					</button>

					<button className={style.social_button}>
						<Icon name="telegram" />
					</button>

					<button className={style.social_button}>
						<Icon name="instagram" />
					</button>

					<button className={style.social_button}>
						<Icon name="twitter" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;