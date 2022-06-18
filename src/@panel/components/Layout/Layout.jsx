import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@panel/components/Sidebar";
import MobileHeader from "@panel/components/MobileHeader";

import style from "./style.css";

const Layout = () => {
	return (
		<div className={style.panel_layout}>
			<MobileHeader className={style.mobile_header} />
			<Sidebar className={style.sidebar} />
			<Outlet />
		</div>
	);
};

export default Layout;
