import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfileLayout from "./components/Layout";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<ProfileLayout />}>
			</Route>
		</Routes>
	);
};
