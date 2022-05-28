import React, { Fragment } from "react";
import RouteQuery from "components/RouteQuery";
import SearchOverlay, { queryParam as searchQueryParam } from "@master/containers/SearchOverlay";

const OverlaysContainer = () => {
	return (
		<Fragment>
			<RouteQuery param={searchQueryParam} element={<SearchOverlay />} />
		</Fragment>
	);
};

export default OverlaysContainer;
