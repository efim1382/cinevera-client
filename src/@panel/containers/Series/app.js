import React, { Suspense, lazy } from "react";
import ManageListSuspense from "@panel/components/ManageListSuspense";

const Series = lazy(() => import(

	/* webpackChunkName: "PanelSeriesList" */
	"./Series"
));

const App = () => {
	return (
		<Suspense fallback={<ManageListSuspense />}>
			<Series />
		</Suspense>
	);
};

export default App;
