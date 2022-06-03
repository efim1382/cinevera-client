import React, { Suspense, lazy } from "react";
import ObjectsListSuspense from "@master/components/ObjectsListSuspense";
import ObjectsListProvider from "@master/store/ObjectsListProvider";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "MasterMoviesList" */
	"./MoviesList"
));

const MoviesListContainer = () => {
	return (
		<ObjectsListProvider type="movie">
			<Suspense fallback={<ObjectsListSuspense />}>
				<MoviesList />
			</Suspense>
		</ObjectsListProvider>
	);
};

export default MoviesListContainer;
