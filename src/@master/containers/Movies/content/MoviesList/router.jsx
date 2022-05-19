import React, { Suspense, lazy } from "react";
import ObjectsListSuspence from "@master/components/ObjectsListSuspence";
import ObjectsListProvider from "@master/store/ObjectsListProvider";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "MasterMoviesList" */
	"./MoviesList"
));

const MoviesListContainer = () => {
	return (
		<ObjectsListProvider type="movie">
			<Suspense fallback={<ObjectsListSuspence />}>
				<MoviesList />
			</Suspense>
		</ObjectsListProvider>
	);
};

export default MoviesListContainer;
