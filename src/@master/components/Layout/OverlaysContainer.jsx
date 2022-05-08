import React from "react";
import RouteQuery from "components/RouteQuery";
import SearchOverlay, { queryParam } from "@master/containers/SearchOverlay";

const OverlaysContainer = () => {
	return (
		<div id="overlay-root">
			<RouteQuery param={queryParam} element={<SearchOverlay />} />
		</div>
	);
};

export default OverlaysContainer;
