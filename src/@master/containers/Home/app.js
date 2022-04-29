import React, { Suspense, lazy } from "react";

const Home = lazy(() => import(

	/* webpackChunkName: "MasterHomepage" */
	"./index"
));

const HomeContainer = () => {
	return (
		<Suspense fallback={null}>
			<Home />
		</Suspense>
	);
};

export default HomeContainer;
