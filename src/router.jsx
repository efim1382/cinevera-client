import React from "react";
import { Routes, Route } from "react-router-dom";

// import Layout from "@master/components/Layout"
import Home from "@master/containers/Home";
import NotFound from "components/NotFound";
import FilmDetails from "@master/containers/FilmDetails";

import AuthRouter from "@master/containers/Auth/router";

export default () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />

			{/*<Route path="/" element={<Layout />} >*/}
			{/*	<Route index element={<Home />} />*/}
			{/*</Route>*/}

			<Route path="/" element={<Home />} />
			<Route path="/auth/*" element={<AuthRouter />} />
			<Route path="/film" element={<FilmDetails />} />
		</Routes>
	);
};
