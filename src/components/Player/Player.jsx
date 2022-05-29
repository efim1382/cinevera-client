import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import LoadingRing from "components/LoadingRing";
import VolumeSlider from "./VolumeSlider";
import Timer from "./Timer";
import Timeline from "./Timeline";
import ButtonFullscreen from "./ActionButtons/Fullscreen";
import ButtonPlay from "./ActionButtons/Play";
import ButtonVolume from "./ActionButtons/Volume";
import ButtonForward from "./ActionButtons/Forward";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Player = ({ className, videoSrc }) => {
	const videoRef = useRef(null);
	const pageRootRef = useRef(null);

	const [isLoaded, setIsLoaded] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const togglePlay = () => {
		videoRef.current.paused
			? videoRef.current.play()
			: videoRef.current.pause();
	};

	const onTimeUpdate = () => setCurrentTime(videoRef.current.currentTime);

	const onLoadedMetadata = () => {
		setIsLoaded(true);
	};

	return (
		<div
			className={cx("player", className)}
			ref={pageRootRef}
		>
			<video
				ref={videoRef}
				src={videoSrc}
				preload="auto"
				playsInline
				onTimeUpdate={onTimeUpdate}
				onLoadedMetadata={onLoadedMetadata}
			/>

			<button
				type="button"
				data-action="true"
				onClick={togglePlay}
				className={style.toggle_play_cover}
			/>

			<div className={style.controls}>
				<section className={style.section}>
					<ButtonPlay
						videoRef={videoRef}
						className={style.button}
					/>

					<ButtonForward
						videoRef={videoRef}
						className={style.button}
					/>

					<ButtonVolume
						videoRef={videoRef}
						className={style.button}
					/>

					<VolumeSlider
						videoRef={videoRef}
						className={style.volume_range}
					/>

					{isLoaded && (
						<Timer
							currentTime={currentTime}
							videoRef={videoRef}
							className={style.time}
						/>
					)}
				</section>

				<section className={style.section}>
					<ButtonFullscreen
						fullScreenElementRef={pageRootRef}
						className={style.button}
					/>
				</section>

				<Timeline
					currentTime={currentTime}
					videoRef={videoRef}
					setCurrentTime={setCurrentTime}
					className={style.timeline}
				/>
			</div>

			<LoadingRing isShown={!isLoaded} className={style.loading} />
		</div>
	);
};

Player.propTypes = {
	className: PropTypes.string,
	videoSrc: PropTypes.string.isRequired,
};

export default Player;
