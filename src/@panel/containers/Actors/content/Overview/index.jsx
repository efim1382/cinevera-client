import React, { Suspense, lazy } from "react";
import OverviewSuspense from "./Suspense";

const Overview = lazy(() => import(

	/* webpackChunkName: "Panel/Actors/DetailsOverview" */
	"./Overview"
));

export default (props) => {
	return (
		<Suspense fallback={<OverviewSuspense />}>
			<Overview {...props} />
		</Suspense>
	);
};
