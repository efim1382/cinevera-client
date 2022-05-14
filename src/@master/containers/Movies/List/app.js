import React, { Suspense, lazy } from "react";
import ObjectsListProvider from "@master/store/ObjectsListProvider";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "MasterMoviesList" */
	"./List"
));

const MoviesListContainer = () => {
	return (
		<ObjectsListProvider type="movie">
			<Suspense fallback="...Loading">
				<MoviesList />
			</Suspense>
		</ObjectsListProvider>
	);
};

export default MoviesListContainer;
