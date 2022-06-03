import React, { Suspense, lazy } from "react";
import ManageListSuspense from "@panel/components/ManageListSuspense";

const Users = lazy(() => import(

	/* webpackChunkName: "PanelUsersList" */
	"./Users"
));

const App = () => {
	return (
		<Suspense fallback={<ManageListSuspense />}>
			<Users />
		</Suspense>
	);
};

export default App;
