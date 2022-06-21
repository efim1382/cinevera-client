import React, { Suspense, lazy } from "react";

const AddSeasonOverlay = lazy(() => import(

	/* webpackChunkName: "PanelDetailsAddSeasonOverlay" */
	"./AddSeasonOverlay"
));

export default (props) => {
	return (
		<Suspense fallback={null}>
			<AddSeasonOverlay {...props} />
		</Suspense>
	);
};
