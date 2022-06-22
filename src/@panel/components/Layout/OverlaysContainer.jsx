import React, { Fragment } from "react";
import RouteQuery from "components/RouteQuery";
import CreateMovieOverlay, { queryParam as createMovieQueryParam } from "@panel/containers/CreateMovieOverlay";

const OverlaysContainer = () => {
	return (
		<Fragment>
			<RouteQuery param={createMovieQueryParam} element={<CreateMovieOverlay />} />
		</Fragment>
	);
};

export default OverlaysContainer;
