import React, { Suspense, lazy } from "react";
import ManageListSuspense from "@panel/components/ManageListSuspense";

const ManageList = lazy(() => import(

	/* webpackChunkName: "Panel/Actors/ManageList" */
	"./ManageList"
));

export default () => {
	return (
		<Suspense fallback={<ManageListSuspense />}>
			<ManageList />
		</Suspense>
	);
};
