import React from "react";
import { Routes, Route } from "react-router-dom";

import SeriesList from "./content/SeriesList";
import Overview from "./content/Overview";
import Design from "./content/Design";
import DetailsLayout from "./content/DetailsLayout";

import DetailsStore from "@panel/store/MovieDetails.store";

export default () => {
	return (
		<Routes>
			<Route exact path="/" element={<SeriesList />} />

			<Route
				path="/:id/*"

				element={
					<DetailsStore type="series">
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
