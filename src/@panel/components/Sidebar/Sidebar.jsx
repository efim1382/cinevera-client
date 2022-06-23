import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Sidebar = ({ className }) => {
	const linkClassName = ({ isActive }) => isActive
		? cx("link", "_is-active")
		: style.link;

	return (
		<div className={cx("sidebar", className)}>
			<div className={style.logo_container}>
				<p to="/" className={style.logo}>
					cin
					{" "}
					<span>panel</span>
				</p>
			</div>

			<nav className={style.navigation}>
				<NavLink to="/panel/movies/" className={linkClassName}>
					<Icon name="local_movies" />
					<span className={style.caption}>Movies</span>
				</NavLink>

				<NavLink to="/panel/series/" className={linkClassName}>
					<Icon name="live_tv" />
					<span className={style.caption}>TV Series</span>
				</NavLink>

				<NavLink to="/panel/series/" className={linkClassName}>
					<Icon name="people" />
					<span className={style.caption}>Actors</span>
				</NavLink>

				<NavLink to="/" className={linkClassName}>
					<Icon name="logout" />
					<span className={style.caption}>To Project</span>
				</NavLink>
			</nav>
		</div>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
};

export default Sidebar;
