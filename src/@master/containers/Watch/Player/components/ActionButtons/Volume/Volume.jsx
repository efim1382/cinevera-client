import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "../style.css";

const cx = classnames.bind(style);

const ButtonVolume = ({ className, videoRef }) => {
	const isMuted = videoRef.current?.volume === 0;

	const toggleVolume = () => {
		if (videoRef.current.volume === 0) {
			return videoRef.current.volume = 1;
		}

		videoRef.current.volume = 0;
	};

	const volumeUp = () => {
		const volume = videoRef.current.volume + 0.1;

		videoRef.current.volume = volume > 1
			? 1
			: volume;
	};

	const volumeDown = () => {
		const volume = videoRef.current.volume - 0.1;

		videoRef.current.volume = volume < 0
			? 0
			: volume;
	};

	const onKeyDown = (event) => {
		if (event.code === "ArrowUp") {
			volumeUp();
		}

		if (event.code === "ArrowDown") {
			volumeDown();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<button
			type="button"
			data-action="true"
			className={cx("button", className)}
			onClick={toggleVolume}
		>
			{isMuted && (
				<Icon name="volume_off" />
			)}

			{!isMuted && (
				<Icon name="volume_up" />
			)}
		</button>
	);
};

ButtonVolume.propTypes = {
	videoRef: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default ButtonVolume;
