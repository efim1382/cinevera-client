import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsStore from "./store/ActorDetails.store";

import ManageList from "./content/ManageList";
import DetailsLayout from "./content/DetailsLayout";
import Overview from "./content/Overview";

export default () => {
	return (
		<Routes>
			<Route exact path="/" element={<ManageList />} />

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
