import React, { Fragment } from "react";
import RouteQuery from "components/RouteQuery";
import AddObjectOverlay, { queryParam as addObjectQueryParam } from "@panel/containers/AddObjectOverlay";

const OverlaysContainer = () => {
	return (
		<Fragment>
			<RouteQuery param={addObjectQueryParam} element={<AddObjectOverlay />} />
		</Fragment>
	);
};

export default OverlaysContainer;
