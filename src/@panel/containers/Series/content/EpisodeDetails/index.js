import React, { Suspense, lazy } from "react";
import EpisodeSuspense from "./Suspense";

const EpisodeDetails = lazy(() => import(

	/* webpackChunkName: "PanelDetailsEpisodeDetails" */
	"./EpisodeDetails"
));

export default (props) => {
	return (
		<Suspense fallback={<EpisodeSuspense />}>
			<EpisodeDetails {...props} />
		</Suspense>
	);
};
