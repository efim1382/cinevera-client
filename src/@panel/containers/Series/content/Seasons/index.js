import React, { Suspense, lazy } from "react";

const Seasons = lazy(() => import(

	/* webpackChunkName: "PanelDetailsSeasons" */
	"./Seasons"
));

export default (props) => {
	return (
		<Suspense fallback="Loading...">
			<Seasons {...props} />
		</Suspense>
	);
};
