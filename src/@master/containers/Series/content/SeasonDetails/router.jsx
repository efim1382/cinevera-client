import React, { Suspense, lazy } from "react";
import SeasonDetailsSuspense from "@master/containers/Series/components/SeriesDetailsSuspence";

const SeasonDetails = lazy(() => import(

	/* webpackChunkName: "MasterSeasonDetails" */
	"./index"
));

const SeasonDetailsContainer = () => {
	return (
		<Suspense fallback={<SeasonDetailsSuspense />}>
			<SeasonDetails />
		</Suspense>
	);
};

export default SeasonDetailsContainer;
