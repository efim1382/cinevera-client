import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@master/components/Layout";
import NotFound from "components/NotFound";

import Home from "@master/containers/Home/app";
import AuthRouter from "@master/containers/Auth/router";
import MoviesRouter from "@master/containers/Movies/router";

export default () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />

			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/movies/*" element={<MoviesRouter />} />
			</Route>

			<Route path="/auth/*" element={<AuthRouter />} />
		</Routes>
	);
};
