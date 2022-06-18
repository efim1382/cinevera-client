import React, { Suspense, lazy } from "react";
import LayoutSuspense from "./Suspense";

const Layout = lazy(() => import(

	/* webpackChunkName: "PanelDetailsLayout" */
	"./Layout"
));

export default (props) => {
	return (
		<Suspense fallback={<LayoutSuspense />}>
			<Layout {...props} />
		</Suspense>
	);
};
