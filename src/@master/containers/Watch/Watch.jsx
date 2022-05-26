import React from "react";
import { useParams } from "react-router-dom";
import Player from "./Player";
import { hostApi } from "classes/XHR";
import style from "./style.css";

const Watch = () => {
	const { video } = useParams();
	const videoSrc = `${hostApi}/video/${video}`;

	return (
		<Player
			videoSrc={videoSrc}
			className={style.player}
		/>
	);
};

export default Watch;
