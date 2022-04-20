import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "components/NotFound";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default () => {
	return (
		<Routes>
			<Route path="sign-in/" element={<SignIn />} />
			<Route path="sign-up/" element={<SignUp />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
