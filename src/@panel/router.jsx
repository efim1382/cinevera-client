import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@panel/components/Layout";

import Series from "./containers/Series";
import Movies from "./containers/Movies";
import Users from "./containers/Users";

import CreateMovie from "./containers/CreateMovie";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="*" element={<Navigate to="/panel/movies/" replace />} />
				<Route path="/" element={<Navigate to="/panel/movies/" replace />} />
				<Route path="series/" element={<Series />} />
				<Route path="movies/" element={<Movies />} />
				<Route path="movies/new/" element={<CreateMovie />} />
				<Route path="users/" element={<Users />} />
			</Route>
		</Routes>
	);
};
