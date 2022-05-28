import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { secondsToHms } from "components/Player/timeHelpers";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Timer = (props) => {
	const {
		currentTime,
		videoRef,
		className,
	} = props;

	const formattedCurrentTime = useMemo(() => (
		secondsToHms(currentTime)
	), [currentTime]);

	const formattedVideoDuration = useMemo(() => (
		secondsToHms(videoRef.current.duration)
	), [videoRef.current.duration]);

	return (
		<span className={cx("time", className)}>
			{formattedCurrentTime}
			{" "}
			/
			{" "}
			{formattedVideoDuration}
		</span>
	);
};

Timer.defaultProps = {
	currentTime: 0,
};

Timer.propTypes = {
	currentTime: PropTypes.number,
	videoRef: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default Timer;
