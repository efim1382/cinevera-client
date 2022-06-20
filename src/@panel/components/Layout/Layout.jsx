import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@panel/components/Sidebar";
import MobileHeader from "@panel/components/MobileHeader";
import useMedia from "hooks/useMedia";

import style from "./style.css";

const Layout = () => {
	const isMobileView = useMedia("(max-width: 1024px)");

	return (
		<div className={style.panel_layout}>
			{isMobileView && (
				<MobileHeader className={style.mobile_header} />
			)}

			{!isMobileView && (
				<Sidebar className={style.sidebar} />
			)}

			<Outlet />
		</div>
	);
};

export default Layout;
