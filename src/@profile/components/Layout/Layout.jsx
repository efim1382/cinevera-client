import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Navigation from "@profile/components/Navigation";
import OverlaysContainer from "./OverlaysContainer";

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<Navigation />
			<Outlet />
			<OverlaysContainer />
		</Fragment>
	);
};

export default Layout;
