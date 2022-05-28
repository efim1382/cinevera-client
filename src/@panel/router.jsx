import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@panel/components/Layout";

import Series from "./containers/Series";
import Movies from "./containers/Movies";
import Users from "./containers/Users";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="*" element={<Navigate to="/panel/movies/" replace />} />
				<Route path="/" element={<Navigate to="/panel/movies/" replace />} />
				<Route path="series/" element={<Series />} />
				<Route path="movies/" element={<Movies />} />
				<Route path="users/" element={<Users />} />
			</Route>
		</Routes>
	);
};
