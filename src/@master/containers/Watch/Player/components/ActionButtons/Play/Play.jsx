import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "../style.css";

const cx = classnames.bind(style);

const ButtonPlay = ({ className, videoRef }) => {
	const [isPlay, setIsPlay] = useState(false);

	const nativePlay = () => videoRef.current.play();
	const nativePause = () => videoRef.current.pause();

	const togglePlay = () => {
		videoRef.current.paused
			? nativePlay()
			: nativePause();
	};

	const onPlay = () => {
		setIsPlay(true);
	};

	const onPause = () => {
		setIsPlay(false);
	};

	const onEnter = (event) => {
		if (event.path[0].getAttribute("data-action") === "true") {
			event.preventDefault();
		}

		togglePlay();
	};

	const onKeyDown = (event) => {
		if (event.code === "Space") {
			onEnter(event);
		}
	};

	useEffect(() => {
		videoRef.current.addEventListener("play", onPlay);
		videoRef.current.addEventListener("pause", onPause);
		document.addEventListener("keydown", onKeyDown);

		return () => {
			videoRef.current.removeEventListener("play", onPlay);
			videoRef.current.removeEventListener("pause", onPause);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<button
			type="button"
			data-action="true"
			className={cx("button", className)}
			onClick={togglePlay}
		>
			{!isPlay && (
				<Icon name="play_arrow" />
			)}

			{isPlay && (
				<Icon name="pause" />
			)}
		</button>
	);
};

ButtonPlay.propTypes = {
	videoRef: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default ButtonPlay;
