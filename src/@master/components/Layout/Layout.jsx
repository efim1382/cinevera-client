import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import OverlaysContainer from "./OverlaysContainer";

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<Outlet />
			<OverlaysContainer />
		</Fragment>
	);
};

export default Layout;
