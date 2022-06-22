import React, { Suspense, lazy } from "react";
import DesignSuspense from "./Suspense";

const Design = lazy(() => import(

	/* webpackChunkName: "PanelDetailsDesign" */
	"./Design"
));

export default (props) => {
	return (
		<Suspense fallback={<DesignSuspense />}>
			<Design {...props} />
		</Suspense>
	);
};
