import React from "react";
import { Routes, Route } from "react-router-dom";

import MoviesList from "./content/MoviesList";
import Overview from "./content/Overview";
import Design from "./content/Design";
import DetailsLayout from "./content/DetailsLayout";

import DetailsStore from "@panel/store/MovieDetails.store";

export default () => {
	return (
		<Routes>
			<Route exact path="/" element={<MoviesList />} />

			<Route
				path="/:id/*"

				element={
					<DetailsStore>
						<DetailsLayout />
					</DetailsStore>
				}
			>
				<Route index exact element={<Overview />} />
				<Route exact path="design/" element={<Design />} />
			</Route>
		</Routes>
	);
};
