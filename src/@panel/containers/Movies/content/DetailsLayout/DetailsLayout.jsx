import React from "react";
import { Outlet } from "react-router-dom";
import DetailsHeader from "@panel/components/DetailsHeader";
import useDetailsData from "@panel/containers/Movies/hooks/useDetailsData";

import style from "./style.css";

const navigation = [
	{
		to: "/panel/movies/:id/",
		label: "Overview",
	},

	{
		to: "/panel/movies/:id/design/",
		label: "Design",
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
