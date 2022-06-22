import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";
import ObjectDetailsProvider from "@master/store/ObjectDetailsProvider";

import SeriesList from "./content/SeriesList/router";
import SeasonDetails from "./content/SeasonDetails/router";

export default () => {
	return (
		<Routes>
			<Route index element={<SeriesList />} />

			<Route
				path="/details/:id/season/:seasonId"

				element={
					<ObjectDetailsProvider type="series">
						<SeasonDetails />
					</ObjectDetailsProvider>
				}
			/>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
