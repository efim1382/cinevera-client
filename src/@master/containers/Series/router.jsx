import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";

import List from "./List/app";
import Details from "./Details/app";

export default () => {
	return (
		<Routes>
			<Route index element={<List />} />
			<Route path="/details/:id/season/:seasonId" element={<Details />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
