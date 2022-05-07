import React, { Suspense, lazy } from "react";

import MoviesListProvider from "./MoviesListProvider";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "MasterFilmDetails" */
	"./List"
));

const MoviesListContainer = () => {
	return (
		<MoviesListProvider>
			<Suspense fallback="...Loading">
				<MoviesList />
			</Suspense>
		</MoviesListProvider>
	);
};

export default MoviesListContainer;
