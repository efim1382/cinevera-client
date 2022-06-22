import React, { Suspense, lazy } from "react";
import { Suspense as DetailsHeaderSuspense } from "@panel/components/DetailsHeader";

const DetailsLayout = lazy(() => import(

	/* webpackChunkName: "Panel/Actors/DetailsLayout" */
	"./DetailsLayout"
));

export default (props) => {
	return (
		<Suspense fallback={<DetailsHeaderSuspense />}>
			<DetailsLayout {...props} />
		</Suspense>
	);
};
