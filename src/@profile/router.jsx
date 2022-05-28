import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfileLayout from "./components/Layout";
import RecentMovies from "./containers/RecentMovies";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<ProfileLayout />}>
				<Route index element={<RecentMovies />} />
			</Route>
		</Routes>
	);
};
