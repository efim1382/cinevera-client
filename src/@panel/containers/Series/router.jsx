import React from "react";
import { Routes, Route } from "react-router-dom";

import DetailsLayout from "./content/DetailsLayout";
import SeriesList from "./content/SeriesList";
import Overview from "./content/Overview";
import Design from "./content/Design";
import Seasons from "./content/Seasons";
import SeasonDetails from "./content/SeasonDetails";
import EpisodeDetails from "./content/EpisodeDetails";

import SeasonsStore from "@panel/containers/Series/store/Seasons.store";
import DetailsStore from "@panel/store/MovieDetails.store";

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
				<Route exact path="design/" element={<Design />} />

				<Route
					exact
					path="seasons/"
					element={<SeasonsStore />}
				>
					<Route index exact element={<Seasons />} />
					<Route exact path=":seasonNumber/" element={<SeasonDetails />} />
					<Route exact path=":seasonNumber/:episodeNumber/" element={<EpisodeDetails />} />
				</Route>
			</Route>
		</Routes>
	);
};
