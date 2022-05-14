import React, { Suspense, lazy } from "react";
import ObjectsListProvider from "@master/store/ObjectsListProvider";

const SeriesList = lazy(() => import(

	/* webpackChunkName: "MasterSeriesList" */
	"./List"
));

const SeriesContainer = () => {
	return (
		<ObjectsListProvider type="series">
			<Suspense fallback="...Loading">
				<SeriesList />
			</Suspense>
		</ObjectsListProvider>
	);
};

export default SeriesContainer;
