import React, { Fragment } from "react";
import RouteQuery from "components/RouteQuery";
import AddObjectOverlay, { queryParam as addObjectQueryParam } from "@panel/containers/AddObjectOverlay";
import AddActorOverlay, { queryParam as addActorQueryParam } from "@panel/containers/Actors/content/AddActorOverlay";

const OverlaysContainer = () => {
	return (
		<Fragment>
			<RouteQuery param={addObjectQueryParam} element={<AddObjectOverlay />} />
			<RouteQuery param={addActorQueryParam} element={<AddActorOverlay />} />
		</Fragment>
	);
};

export default OverlaysContainer;
