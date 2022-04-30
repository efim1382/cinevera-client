import React, { Suspense, lazy } from "react";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "MasterFilmDetails" */
	"./List"
));

const MoviesListContainer = () => {
	return (
		<Suspense fallback={null}>
			<MoviesList />
		</Suspense>
	);
};

export default MoviesListContainer;