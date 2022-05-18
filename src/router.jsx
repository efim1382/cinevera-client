import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "components/NotFound";

import Layout from "@master/components/Layout";
import Home from "@master/containers/Home/app";
import AuthRouter from "@master/containers/Auth/router";
import MoviesRouter from "@master/containers/Movies/router";
import SeriesRouter from "@master/containers/Series/router";

import ProfileLayout from "@profile/components/Layout";
import RecentMovies from "@profile/containers/RecentMovies";

import PanelMovies from "@panel/containers/Movies";

export default () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />

			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/series/*" element={<SeriesRouter />} />
				<Route path="/movies/*" element={<MoviesRouter />} />
			</Route>

			<Route path="/profile" element={<ProfileLayout />} >
				<Route index element={<RecentMovies />} />
			</Route>

			<Route path="/panel/movies" element={<PanelMovies />} />

			<Route path="/auth/*" element={<AuthRouter />} />
		</Routes>
	);
};
