import React, { Suspense, lazy } from "react";

const Series = lazy(() => import(

	/* webpackChunkName: "SeriesHomepage" */
	"./index"
));

const SeriesContainer = () => {
	return (
		<Suspense fallback={null}>
			<Series />
		</Suspense>
	);
};

export default SeriesContainer;
