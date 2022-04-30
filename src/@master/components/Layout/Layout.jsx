import React, { Fragment } from "react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

import style from "./style.css";

const Layout = () => {
	return (
		<Fragment>
			<Header />

			<div className={style.content}>
				<Outlet />
			</div>
		</Fragment>
	);
};

export default Layout;
