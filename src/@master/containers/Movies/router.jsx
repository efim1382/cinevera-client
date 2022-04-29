import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";

import Movies from "./Movies";
import Details from "./Details";

export default () => {
	return (
		<Routes>
			<Route index element={<Movies />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
