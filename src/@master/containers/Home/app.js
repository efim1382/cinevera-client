import React, { Suspense, lazy } from "react";
import HomeSuspense from "./Suspense";

const Home = lazy(() => import(

	/* webpackChunkName: "MasterHomepage" */
	"./index"
));

const HomeContainer = () => {
	return (
		<Suspense fallback={<HomeSuspense />}>
			<Home />
		</Suspense>
	);
};

export default HomeContainer;
