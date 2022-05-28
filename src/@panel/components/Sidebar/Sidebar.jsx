import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/Icon";

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

			<div className={style.section_menu}>
				<NavLink to="/panel/movies/" className={style.section_items}>
					<Icon name="local_movies" />
					<span className={style.section_items_name}>Movies</span>
				</NavLink>

				<NavLink to="/panel/series/" className={style.section_items}>
					<Icon name="live_tv" />
					<span className={style.section_items_name}>TV Series</span>
				</NavLink>

				<NavLink to="/panel/users/" className={style.section_items}>
					<Icon name="people" />
					<span className={style.section_items_name}>Users</span>
				</NavLink>
			</div>

			<div className={style.profile}>
				<div className={style.avatar} />
				<span className={style.name}>Yurii Korbat</span>

				<button className={style.profile_button}>
					<Icon name="expand_more" />
				</button>
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
};

export default Sidebar;
