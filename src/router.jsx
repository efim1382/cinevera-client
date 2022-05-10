import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "components/NotFound";

import Layout from "@master/components/Layout";
import Home from "@master/containers/Home/app";
import Series from "@master/containers/Series/app";
import AuthRouter from "@master/containers/Auth/router";
import MoviesRouter from "@master/containers/Movies/router";

import ProfileLayout from "@profile/components/Layout";
import RecentMovies from "@profile/containers/RecentMovies";

export default () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />

			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/series" element={<Series />} />
				<Route path="/movies/*" element={<MoviesRouter />} />
			</Route>

			<Route path="/profile" element={<ProfileLayout />} >
				<Route index element={<RecentMovies />} />
			</Route>

			<Route path="/auth/*" element={<AuthRouter />} />
		</Routes>
	);
};
