import React, { Suspense, lazy } from "react";
import MovieDetailsSuspence from "@master/containers/Movies/components/MovieDetailsSuspence";

const MovieDetails = lazy(() => import(

	/* webpackChunkName: "MasterMovieDetails" */
	"./index"
));

const MovieDetailsContainer = () => {
	return (
		<Suspense fallback={<MovieDetailsSuspence />}>
			<MovieDetails />
		</Suspense>
	);
};

export default MovieDetailsContainer;
