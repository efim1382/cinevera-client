import React from "react";
import { Outlet } from "react-router-dom";
import DetailsHeader from "@panel/components/DetailsHeader";
import useDetailsData from "@panel/containers/Actors/hooks/useDetailsData";

import style from "./style.css";

const navigation = [
	{
		to: "/panel/actors/:id/",
		label: "Overview",
	},
];

const DetailsLayout = () => {
	const data = useDetailsData();

	return (
		<div className={style.details}>
			<DetailsHeader
				title={data.name}
				tabs={navigation}
				className={style.header}
			/>

			<Outlet />
		</div>
	);
};

export default DetailsLayout;
