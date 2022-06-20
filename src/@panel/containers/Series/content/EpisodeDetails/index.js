import React, { Suspense, lazy } from "react";

const EpisodeDetails = lazy(() => import(

	/* webpackChunkName: "PanelDetailsEpisodeDetails" */
	"./EpisodeDetails"
));

export default (props) => {
	return (
		<Suspense fallback={null}>
			<EpisodeDetails {...props} />
		</Suspense>
	);
};
