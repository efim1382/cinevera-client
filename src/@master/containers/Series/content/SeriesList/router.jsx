import React, { Suspense, lazy } from "react";
import ObjectsListProvider from "@master/store/ObjectsListProvider";
import ObjectsListSuspense from "@master/components/ObjectsListSuspense";

const SeriesList = lazy(() => import(

	/* webpackChunkName: "MasterSeriesList" */
	"./SeriesList"
));

const SeriesContainer = () => {
	return (
		<ObjectsListProvider type="series">
			<Suspense fallback={<ObjectsListSuspense />}>
				<SeriesList />
			</Suspense>
		</ObjectsListProvider>
	);
};

export default SeriesContainer;
