import React, { Suspense, lazy } from "react";
import ManageListSuspense from "@panel/components/ManageListSuspense";

const MoviesList = lazy(() => import(

	/* webpackChunkName: "PanelMoviesList" */
	"./MoviesList"
));

export default () => {
	return (
		<Suspense fallback={<ManageListSuspense />}>
			<MoviesList />
		</Suspense>
	);
};
