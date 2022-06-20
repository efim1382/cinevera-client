import React, { Suspense, lazy } from "react";

const SeasonDetails = lazy(() => import(

	/* webpackChunkName: "PanelDetailsSeasonDetails" */
	"./SeasonDetails"
));

export default (props) => {
	return (
		<Suspense fallback={null}>
			<SeasonDetails {...props} />
		</Suspense>
	);
};
