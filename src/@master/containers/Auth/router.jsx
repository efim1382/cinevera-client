import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "components/NotFound";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Forgot from "./Forgot";
import NewPassword from "./NewPassword";

export default () => {
	return (
		<Routes>
			<Route path="sign-in/" element={<SignIn />} />
			<Route path="sign-up/" element={<SignUp />} />
			<Route path="forgot/" element={<Forgot />} />
			<Route path="new-password/" element={<NewPassword />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
