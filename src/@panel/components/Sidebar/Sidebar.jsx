import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Sidebar = ({ className }) => {
	return (
		<div className={cx("sidebar", className)}>
			<div className={style.logo_container}>
				<NavLink to="/" className={style.logo}>
					cinevera
					{" "}
					<span>panel</span>
				</NavLink>
			</div>

			<nav className={style.navigation}>
				<NavLink to="/panel/movies/" className={style.link}>
					<Icon name="local_movies" />
					<span className={style.caption}>Movies</span>
				</NavLink>

				<NavLink to="/panel/series/" className={style.link}>
					<Icon name="live_tv" />
					<span className={style.caption}>TV Series</span>
				</NavLink>

				<NavLink to="/panel/users/" className={style.link}>
					<Icon name="people" />
					<span className={style.caption}>Users</span>
				</NavLink>
			</nav>

			<button className={style.profile}>
				<div className={style.avatar} />
				<span className={style.name}>Yurii Korbat</span>
				<Icon name="expand_more" />
			</button>
		</div>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
};

export default Sidebar;
