import React, { Suspense, lazy } from "react";
import ObjectsListProvider from "@master/store/ObjectsListProvider";
import ObjectsListSuspence from "@master/components/ObjectsListSuspence";

const SeriesList = lazy(() => import(

	/* webpackChunkName: "MasterSeriesList" */
	"./SeriesList"
));

const SeriesContainer = () => {
	return (
		<ObjectsListProvider type="series">
			<Suspense fallback={<ObjectsListSuspence />}>
				<SeriesList />
			</Suspense>
		</ObjectsListProvider>
	);
};

export default SeriesContainer;
