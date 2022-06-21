import React, { Suspense, lazy } from "react";
import SeasonsSuspense from "./Suspense";

const Seasons = lazy(() => import(

	/* webpackChunkName: "PanelDetailsSeasons" */
	"./Seasons"
));

export default (props) => {
	return (
		<Suspense fallback={<SeasonsSuspense />}>
			<Seasons {...props} />
		</Suspense>
	);
};
