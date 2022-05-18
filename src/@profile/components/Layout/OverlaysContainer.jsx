import React, { Fragment } from "react";
import RouteQuery from "components/RouteQuery";
import SearchOverlay, { queryParam } from "@master/containers/SearchOverlay";

const OverlaysContainer = () => {
	return (
		<Fragment>
			<RouteQuery param={queryParam} element={<SearchOverlay />} />
		</Fragment>
	);
};

export default OverlaysContainer;
