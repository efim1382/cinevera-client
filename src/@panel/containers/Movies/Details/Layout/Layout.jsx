import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import RouteQuery from "components/RouteQuery";
import AddCastOverlay, { queryParam as castQueryParam } from "@panel/components/AddCastOverlay";
import Header from "./Header";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Layout = () => {
	const { id } = useParams();

	const linkClassName = ({ isActive }) => isActive
		? cx("tab", "_is-active")
		: style.tab;

	return (
		<div className={style.details}>
			<Header className={style.subheader} />

			<nav className={style.tabs}>
				<NavLink to={`/panel/movies/${id}/`} className={linkClassName}>Overview</NavLink>
				<NavLink to={`/panel/movies/${id}/design/`} className={linkClassName}>Design</NavLink>
				<NavLink to={`/panel/movies/${id}/cast/`} className={linkClassName}>Cast</NavLink>
			</nav>

			<div className={style.content}>
				<Outlet />
			</div>

			<RouteQuery param={castQueryParam} element={<AddCastOverlay />} />
		</div>
	);
};

export default Layout;
