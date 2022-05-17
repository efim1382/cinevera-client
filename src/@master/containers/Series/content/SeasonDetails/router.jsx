import React, { Suspense, lazy } from "react";
import SeasonDetailsSuspence from "@master/containers/Series/components/SeriesDetailsSuspence";

const SeasonDetails = lazy(() => import(

	/* webpackChunkName: "MasterSeasonDetails" */
	"./index"
));

const SeasonDetailsContainer = () => {
	return (
		<Suspense fallback={<SeasonDetailsSuspence />}>
			<SeasonDetails />
		</Suspense>
	);
};

export default SeasonDetailsContainer;
