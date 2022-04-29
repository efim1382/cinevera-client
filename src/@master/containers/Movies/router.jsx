import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";

import MoviesList from "./MoviesList/app";
import Details from "./Details/app";

export default () => {
	return (
		<Routes>
			<Route index element={<MoviesList />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
