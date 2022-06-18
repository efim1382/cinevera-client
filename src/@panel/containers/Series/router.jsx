import React from "react";
import { Routes, Route } from "react-router-dom";

import SeriesList from "./content/SeriesList";
import Overview from "./content/Overview";
import DetailsLayout from "./content/DetailsLayout";

import DetailsStore from "./store/SeriesDetails.store";

export default () => {
	return (
		<Routes>
			<Route exact path="/" element={<SeriesList />} />

			<Route
				path="/:id/*"

				element={
					<DetailsStore>
						<DetailsLayout />
					</DetailsStore>
				}
			>
				<Route index exact element={<Overview />} />
			</Route>
		</Routes>
	);
};
