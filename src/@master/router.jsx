import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@master/components/Layout";

import NotFound from "components/NotFound";
import Home from "./containers/Home/app";
import SeriesRouter from "./containers/Series/router";
import MoviesRouter from "./containers/Movies/router";
import Watch from "./containers/Watch";
import AuthRouter from "./containers/Auth/router";

export default () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />

			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/series/*" element={<SeriesRouter />} />
				<Route path="/movies/*" element={<MoviesRouter />} />
			</Route>

			<Route path="/auth/*" element={<AuthRouter />} />

			<Route path="/watch/:video/" element={<Watch />} />
		</Routes>
	);
};
