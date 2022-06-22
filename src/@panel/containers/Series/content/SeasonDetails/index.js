import React, { Suspense, lazy } from "react";
import DetailsSuspense from "./Suspense";

const SeasonDetails = lazy(() => import(

	/* webpackChunkName: "PanelDetailsSeasonDetails" */
	"./SeasonDetails"
));

export default (props) => {
	return (
		<Suspense fallback={<DetailsSuspense />}>
			<SeasonDetails {...props} />
		</Suspense>
	);
};
