import React, { Suspense, lazy } from "react";

const Details = lazy(() => import(

	/* webpackChunkName: "MasterFilmDetails" */
	"./index"
));

const FilmDetailsContainer = () => {
	return (
		<Suspense fallback={null}>
			<Details />
		</Suspense>
	);
};

export default FilmDetailsContainer;
