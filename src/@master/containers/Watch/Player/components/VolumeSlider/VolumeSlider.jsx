import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const VolumeSlider = (props) => {
	const {
		videoRef,
		className,
	} = props;

	const [currentVolume, setCurrentVolume] = useState(1);

	const inline = useMemo(() => (
		{ "--volume-position": currentVolume * 100 }
	), [currentVolume]);

	const onVolumeChange = (event) => setCurrentVolume(event.target.volume);
	const onVolumeSliderChange = (event) => videoRef.current.volume = event.target.value;

	useEffect(() => {
		videoRef.current.addEventListener("volumechange", onVolumeChange);

		return () => {
			videoRef.current.removeEventListener("volumechange", onVolumeChange);
		};
	}, []);

	return (
		<input
			type="range"
			min="0"
			max="1"
			step="0.05"
			value={currentVolume}
			onChange={onVolumeSliderChange}
			style={inline}
			className={cx("volume_range", className)}
		/>
	);
};

VolumeSlider.propTypes = {
	videoRef: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default VolumeSlider;
