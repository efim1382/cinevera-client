import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import OverlaysContainer from "./OverlaysContainer";

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<Outlet />
			<Footer />

			<OverlaysContainer />
		</Fragment>
	);
};

export default Layout;
