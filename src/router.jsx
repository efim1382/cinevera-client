import React from "react";
import { Routes, Route } from "react-router-dom";

import MasterRouter from "@master/router";
import ProfileRouter from "@profile/router";
import PanelRouter from "@panel/router";

export default () => {
	return (
		<Routes>
			<Route path="*" element={<MasterRouter />} />
			<Route path="/profile/*" element={<ProfileRouter />} />
			<Route path="/panel/*" element={<PanelRouter />} />
		</Routes>
	);
};
