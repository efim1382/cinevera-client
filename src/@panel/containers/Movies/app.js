import React, { Suspense, lazy } from "react";
import ManageListSuspense from "@panel/components/ManageListSuspense";

const Movies = lazy(() => import(

	/* webpackChunkName: "PanelMoviesList" */
	"./Movies"
));

const App = () => {
	return (
		<Suspense fallback={<ManageListSuspense />}>
			<Movies />
		</Suspense>
	);
};

export default App;
