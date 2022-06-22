import React, { Suspense, lazy } from "react";

const AddObjectOverlay = lazy(() => import(

	/* webpackChunkName: "Panel/AddObjectOverlay" */
	"./AddObjectOverlay"
));

export { queryParam } from "./AddObjectOverlay";

export default () => {
	return (
		<Suspense fallback={null}>
			<AddObjectOverlay />
		</Suspense>
	);
};
