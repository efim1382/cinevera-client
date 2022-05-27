import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@panel/components/Sidebar";

import style from "./style.css";

const Layout = () => {
	return (
		<div className={style.panel_layout}>
			<Sidebar className={style.sidebar} />
			<Outlet />
		</div>
	);
};

export default Layout;
