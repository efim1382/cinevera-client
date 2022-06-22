import React, { Suspense, lazy } from "react";
import MovieDetailsSuspense from "@master/containers/Movies/components/MovieDetailsSuspence";

const MovieDetails = lazy(() => import(

	/* webpackChunkName: "MasterMovieDetails" */
	"./index"
));

const MovieDetailsContainer = () => {
	return (
		<Suspense fallback={<MovieDetailsSuspense />}>
			<MovieDetails />
		</Suspense>
	);
};

export default MovieDetailsContainer;
