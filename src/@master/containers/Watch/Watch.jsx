import React, { useState, useEffect, useRef } from "react";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const host = process.env.API_HOST || "http://localhost:8001";

const secondsToHms = (seconds = 0) => {
	const numHours = Math.floor(seconds / 3600);
	const numMinutes = Math.floor(seconds % 3600 / 60);
	const numSeconds = Math.floor(seconds % 3600 % 60);

	const formattedHours = numHours > 0
		? `${numHours}:`
		: "";

	const formattedSeconds = numSeconds < 10
		? `0${numSeconds}`
		: numSeconds;

	return `${formattedHours}${numMinutes}:${formattedSeconds}`;
};

let isHover = false;
let isSwipe = false;

const Watch = () => {
	const videoRef = useRef(null);
	const pageRootRef = useRef(null);
	const timelineRef = useRef(null);
	const [isPlay, setIsPlay] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [currentVolume, setCurrentVolume] = useState(1);
	const [currentTime, setCurrentTime] = useState(0);
	const [mouseSwipePercent, setMouseSwipePercent] = useState(null);
	const [mouseHoverPercent, setMouseHoverPercent] = useState(null);

	const mouseEventTimelinePercent = mouseHoverPercent || mouseSwipePercent;

	const progressBarPercent = videoRef.current
		? mouseSwipePercent || (currentTime / videoRef.current.duration) * 100
		: 0;

	const hoverTime = mouseEventTimelinePercent
		? (mouseEventTimelinePercent * videoRef.current.duration) / 100
		: null;

	const formattedHoverTime = hoverTime
		? secondsToHms(hoverTime)
		: null;

	const isMuted = currentVolume === 0;
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

	const progressInline = {
		"--progress": progressBarPercent,
	};

	if (mouseEventTimelinePercent) {
		progressInline["--hover-time-position"] = mouseEventTimelinePercent;
	}

	const nativePlay = () => videoRef.current.play();
	const nativePause = () => videoRef.current.pause();

	const togglePlay = () => {
		videoRef.current.paused
			? nativePlay()
			: nativePause();
	};

	const onPlay = () => setIsPlay(true);
	const onPause = () => setIsPlay(false);
	const openFullscreen = () => pageRootRef.current.requestFullscreen();
	const closeFullscreen = () => document.exitFullscreen();
	const muteVideo = () => videoRef.current.volume = 0;
	const unMuteVide = () => videoRef.current.volume = 1;

	const goForward = () => {
		const newTime = videoRef.current.currentTime + 10;

		videoRef.current.currentTime = newTime > videoRef.current.duration
			? videoRef.current.duration
			: newTime;
	};

	const goBack = () => {
		const newTime = videoRef.current.currentTime - 10;

		videoRef.current.currentTime = newTime < 0
			? 0
			: newTime;
	};

	const getTimelinePercentPosition = (screenX) => {
		const width = timelineRef.current.offsetWidth;
		const left = timelineRef.current.offsetLeft;
		let position = screenX - left;

		if (position < 0) {
			position = 0;
		}

		if (position > width) {
			position = width;
		}

		return (position * 100) / width;
	};

	const onMouseOver = (event) => {
		const percent = getTimelinePercentPosition(event.screenX);
		isHover = true;
		setMouseHoverPercent(percent);
	};

	const onMouseDown = (event) => {
		const percent = getTimelinePercentPosition(event.screenX);
		isSwipe = true;
		setMouseSwipePercent(percent);
	};

	const onMouseMove = (event) => {
		if (isSwipe) {
			const percent = getTimelinePercentPosition(event.screenX);
			setMouseSwipePercent(percent);
		}

		if (isHover) {
			const percent = getTimelinePercentPosition(event.screenX);
			setMouseHoverPercent(percent);
		}
	};

	const onMouseOut = () => {
		if (isHover) {
			isHover = false;
			setMouseHoverPercent(null);
		}
	};

	const onMouseUp = (event) => {
		if (isSwipe) {
			const percent = getTimelinePercentPosition(event.screenX);
			const currentTime = (percent * videoRef.current.duration) / 100;
			setCurrentTime(currentTime);
			videoRef.current.currentTime = currentTime;
			setMouseSwipePercent(null);
			isSwipe = false;
		}
	};

	const onTimeUpdate = () => setCurrentTime(videoRef.current.currentTime);
	const onVolumeChange = (event) => setCurrentVolume(event.target.volume);

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

		if (event.code === "ArrowLeft") {
			goBack();
		}

		if (event.code === "ArrowRight") {
			goForward();
		}
	};

	const onFullScreenChanges = () => {
		setIsFullScreen(!!document.fullscreenElement);
	};

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("fullscreenchange", onFullScreenChanges);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("fullscreenchange", onFullScreenChanges);
		};
	}, []);

	return (
		<div
			className={style.watch}
			ref={pageRootRef}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
		>
			<video
				ref={videoRef}
				src={`${host}/api/video/sdfsdfsdf`}
				onPlay={onPlay}
				onPause={onPause}
				onTimeUpdate={onTimeUpdate}
				onVolumeChange={onVolumeChange}
			/>

			<button
				type="button"
				data-action="true"
				onClick={togglePlay}
				className={style.toggle_play_cover}
			/>

			<div className={style.controls}>
				<section className={style.section}>
					{isPlay && (
						<button type="button" data-action="true" className={style.button} onClick={nativePause}>
							<Icon name="pause" />
						</button>
					)}

					{!isPlay && (
						<button type="button" data-action="true" className={style.button} onClick={nativePlay}>
							<Icon name="play_arrow" />
						</button>
					)}

					<button type="button" data-action="true" className={style.button} onClick={goBack}>
						<Icon name="replay_10" />
					</button>

					<button type="button" data-action="true" className={style.button} onClick={goForward}>
						<Icon name="forward_10" />
					</button>

					{isMuted && (
						<button type="button" data-action="true" className={style.button} onClick={unMuteVide}>
							<Icon name="volume_off" />
						</button>
					)}

					{!isMuted && (
						<button type="button" data-action="true" className={style.button} onClick={muteVideo}>
							<Icon name="volume_up" />
						</button>
					)}
				</section>

				<section className={style.section}>
					{isFullScreen && (
						<button type="button" data-action="true" className={style.button} onClick={closeFullscreen}>
							<Icon name="fullscreen_exit" />
						</button>
					)}

					{!isFullScreen && (
						<button type="button" data-action="true" className={style.button} onClick={openFullscreen}>
							<Icon name="fullscreen" />
						</button>
					)}
				</section>

				<div
					ref={timelineRef}
					style={progressInline}
					onMouseEnter={onMouseOver}
					onMouseLeave={onMouseOut}
					onMouseDown={onMouseDown}
					className={cx("timeline", { "_is-preview-shown": mouseEventTimelinePercent })}
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
			</div>
		</div>
	);
};

export default Watch;
