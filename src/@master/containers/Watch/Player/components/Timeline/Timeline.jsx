import React, { useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import { secondsToHms } from "@master/containers/Watch/Player/helpers/time";
import style from "./style.css";

const cx = classnames.bind(style);

let isSwipe = false;
let isHover = false;

const getTimelinePercentPosition = (screenX, element) => {
	if (!element) {
		return 0;
	}

	const { offsetWidth, offsetLeft } = element;
	let position = screenX - offsetLeft;

	if (position < 0) {
		position = 0;
	}

	if (position > offsetWidth) {
		position = offsetWidth;
	}

	return (position * 100) / offsetWidth;
};

const Timeline = (props) => {
	const {
		currentTime,
		setCurrentTime,
		videoRef,
		className,
	} = props;

	const timelineRef = useRef(null);
	const [mouseSwipePercent, setMouseSwipePercent] = useState(null);
	const [mouseHoverPercent, setMouseHoverPercent] = useState(null);

	const mouseEventTimelinePercent = mouseHoverPercent || mouseSwipePercent;

	const progressBarPercent = useMemo(() => (
		videoRef.current?.duration > 0
			? mouseSwipePercent || (currentTime / videoRef.current?.duration) * 100
			: 0
	), [mouseSwipePercent, currentTime, videoRef.current?.duration]);

	const hoverTime = useMemo(() => (
		mouseEventTimelinePercent
			? (mouseEventTimelinePercent * videoRef.current?.duration) / 100
			: null
	), [mouseEventTimelinePercent, videoRef.current?.duration]);

	const formattedHoverTime = useMemo(() => (
		hoverTime
			? secondsToHms(hoverTime)
			: null
	), [hoverTime]);

	const inline = {
		"--progress": progressBarPercent,
	};

	if (mouseEventTimelinePercent) {
		inline["--hover-time-position"] = mouseEventTimelinePercent;
	}

	const buffered = videoRef.current?.buffered || [];
	const buffers = [];

	for (let i = 0; i < buffered.length; i++) {
		const start = buffered.start(i);
		const end = buffered.end(i);

		if (videoRef.current.currentTime < start || videoRef.current.currentTime > end) {
			continue;
		}

		const from = (100 * start) / videoRef.current.duration;
		const width = (100 * (end - start)) / videoRef.current.duration;

		buffers.push({ from, width });
	}

	const classes = useMemo(() => (
		cx("timeline", className, { "_is-preview-shown": mouseEventTimelinePercent })
	), [className, mouseEventTimelinePercent]);

	const onMouseEnter = (event) => {
		const percent = getTimelinePercentPosition(event.screenX, timelineRef.current);
		isHover = true;
		setMouseHoverPercent(percent);
	};

	const onMouseLeave = () => {
		if (isHover) {
			isHover = false;
			setMouseHoverPercent(null);
		}
	};

	const onMouseDown = (event) => {
		const percent = getTimelinePercentPosition(event.screenX, timelineRef.current);
		isSwipe = true;
		setMouseSwipePercent(percent);
	};

	const onMouseMove = (event) => {
		if (isHover) {
			const percent = getTimelinePercentPosition(event.screenX, timelineRef.current);
			setMouseHoverPercent(percent);
		}

		if (isSwipe) {
			const percent = getTimelinePercentPosition(event.screenX, timelineRef.current);
			setMouseSwipePercent(percent);
		}
	};

	const onMouseUp = (event) => {
		if (isSwipe) {
			const percent = getTimelinePercentPosition(event.screenX, timelineRef.current);
			const currentTime = (percent * videoRef.current?.duration) / 100;
			setCurrentTime(currentTime);
			videoRef.current.currentTime = currentTime;
			setMouseSwipePercent(null);
			isSwipe = false;
		}
	};

	useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};
	}, []);

	return (
		<div
			ref={timelineRef}
			style={inline}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseDown={onMouseDown}
			className={classes}
		>
			<button type="button" data-action="true" className={style.progress_button} />

			{buffers.map(({ from, width }) => {
				const inline = {
					"--from": from,
					"--width": width,
				};

				return (
					<div key={from} className={style.buffer} style={inline} />
				);
			})}

			{formattedHoverTime && (
				<div className={style.time_tooltip}>{formattedHoverTime}</div>
			)}
		</div>
	);
};

Timeline.defaultProps = {
	currentTime: 0,
	setCurrentTime: Function(),
};

Timeline.propTypes = {
	currentTime: PropTypes.number,
	setCurrentTime: PropTypes.func,
	className: PropTypes.string,
	videoRef: PropTypes.object.isRequired,
};

export default Timeline;
