import React, { Suspense, lazy } from "react";

const AddActorOverlay = lazy(() => import(

	/* webpackChunkName: "Panel/AddActorOverlay" */
	"./AddActorOverlay"
));

export { queryParam } from "./AddActorOverlay";

export default () => {
	return (
		<Suspense fallback={null}>
			<AddActorOverlay />
		</Suspense>
	);
};
