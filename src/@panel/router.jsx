import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@panel/components/Layout";

import SeriesRouter from "./containers/Series/router";
import MoviesRouter from "./containers/Movies/router";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="*" element={<Navigate to="/panel/movies/" replace />} />
				<Route path="/" element={<Navigate to="/panel/movies/" replace />} />
				<Route path="movies/*" element={<MoviesRouter />} />
				<Route path="series/*" element={<SeriesRouter />} />
			</Route>
		</Routes>
	);
};
