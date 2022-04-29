import React, { Suspense, lazy } from "react";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "MasterFilmDetails" */
	"./MoviesList"
));

const MoviesListContainer = () => {
	return (
		<Suspense fallback={null}>
			<MoviesList />
		</Suspense>
	);
};

export default MoviesListContainer;
