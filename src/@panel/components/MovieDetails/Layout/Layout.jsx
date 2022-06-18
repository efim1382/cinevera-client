import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import DetailsHeader from "@panel/components/DetailsHeader";
import Suspense from "./Suspense";
import style from "./style.css";

const Layout = ({ context }) => {
	const { state } = useContext(context);
	const { isFetchComplete } = state;

	if (!isFetchComplete) {
		return (
			<Suspense />
		);
	}

	return (
		<div className={style.details}>
			<DetailsHeader />
			<Outlet />
		</div>
	);
};

Layout.propTypes = {
	context: PropTypes.object.isRequired,
};

export default Layout;
