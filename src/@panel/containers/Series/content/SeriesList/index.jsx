import React, { Suspense, lazy } from "react";
import ManageListSuspense from "@panel/components/ManageListSuspense";

const SeriesList = lazy(() => import(

	/* webpackChunkName: "Panel/Series/ManageList" */
	"./SeriesList"
));

export default () => {
	return (
		<Suspense fallback={<ManageListSuspense />}>
			<SeriesList />
		</Suspense>
	);
};
