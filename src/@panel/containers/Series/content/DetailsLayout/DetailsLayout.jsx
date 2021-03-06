import React from "react";
import { Outlet } from "react-router-dom";
import DetailsHeader from "@panel/components/DetailsHeader";
import useDetailsData from "@panel/hooks/useDetailsData";

import style from "./style.css";

const navigation = [
	{
		to: "/panel/series/:id/",
		label: "Overview",
	},

	{
		to: "/panel/series/:id/design/",
		label: "Design",
	},

	{
		to: "/panel/series/:id/seasons/",
		label: "Seasons",
	},
];

const DetailsLayout = () => {
	const data = useDetailsData();

	return (
		<div className={style.details}>
			<DetailsHeader
				title={data.title}
				tabs={navigation}
				className={style.header}
			/>

			<Outlet />
		</div>
	);
};

export default DetailsLayout;
