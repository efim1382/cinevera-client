import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";
import Layout from "@panel/components/Layout";

import Series from "./containers/Series";
import Movies from "./containers/Movies";
import Users from "./containers/Users";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="series/" element={<Series />} />
				<Route path="movies/" element={<Movies />} />
				<Route path="users/" element={<Users />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};
