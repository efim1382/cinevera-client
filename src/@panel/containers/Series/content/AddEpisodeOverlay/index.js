import React, { Suspense, lazy } from "react";

const AddEpisodeOverlay = lazy(() => import(

	/* webpackChunkName: "PanelDetailsAddEpisodeOverlay" */
	"./AddEpisodeOverlay"
));

export default (props) => {
	return (
		<Suspense fallback={null}>
			<AddEpisodeOverlay {...props} />
		</Suspense>
	);
};
