import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetailsProvider from "./Details.store";

import Layout from "./Layout";
import Overview from "./Overview";
import Design from "./Design";
import Cast from "./Cast";

export default () => {
	return (
		<MovieDetailsProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Overview />} />
					<Route path="design/" element={<Design />} />
					<Route path="cast/" element={<Cast />} />
				</Route>
			</Routes>
		</MovieDetailsProvider>
	);
};
