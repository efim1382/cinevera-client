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
				<NavLink to="/" className={style.logo}>
					cinevera
					{" "}
					<span>panel</span>
				</NavLink>
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

				<NavLink to="/panel/users/" className={linkClassName}>
					<Icon name="people" />
					<span className={style.caption}>Users</span>
				</NavLink>
			</nav>

			<div className={style.dropdown_wrapper}>
				<button className={style.profile}>
					<div className={style.avatar} />
					<span className={style.name}>Yurii Korbat</span>
					<Icon name="expand_more" />
				</button>

				<div className={style.dropdown}>
					<NavLink to="/" className={style.profile_link}>
						<Icon name="account_circle" />
						<span>Profile</span>
					</NavLink>

					<NavLink to="/" className={style.profile_link}>
						<Icon name="settings" />
						<span>Edit profile</span>
					</NavLink>

					<NavLink to="/" className={style.profile_link}>
						<Icon name="frends" />
						<span>Frends</span>
					</NavLink>

					<NavLink to="/" className={style.profile_link}>
						<Icon name="location" />
						<span>My location</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
};

export default Sidebar;
