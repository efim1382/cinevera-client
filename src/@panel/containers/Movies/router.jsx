import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateMovie from "./Create";
import MovieDetailsRouter from "./Details/router";
import List from "./List";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<List />} />
			<Route path="/new/" element={<CreateMovie />} />
			<Route path="/:id/*" element={<MovieDetailsRouter />} />
		</Routes>
	);
};
