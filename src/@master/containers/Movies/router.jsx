import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";
import ObjectDetailsProvider from "@master/store/ObjectDetailsProvider";

import MoviesList from "./content/MoviesList/router";
import MovieDetails from "./content/MovieDetails/router";

export default () => {
	return (
		<Routes>
			<Route index element={<MoviesList />} />

			<Route
				path="/details/:id"

				element={
					<ObjectDetailsProvider>
						<MovieDetails />
					</ObjectDetailsProvider>
				}
			/>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
