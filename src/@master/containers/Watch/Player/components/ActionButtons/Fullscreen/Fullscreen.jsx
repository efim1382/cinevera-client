import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "../style.css";

const cx = classnames.bind(style);

const ButtonFullscreen = ({ className, fullScreenElementRef }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const toggleFullScreen = () => {
		if (!document.fullscreenElement) {
			return fullScreenElementRef.current.requestFullscreen();
		}

		document.exitFullscreen();
	};

	const onFullScreenChanged = () => setIsFullScreen(!!document.fullscreenElement);

	useEffect(() => {
		fullScreenElementRef.current.addEventListener("fullscreenchange", onFullScreenChanged);

		return () => {
			fullScreenElementRef.current.removeEventListener("fullscreenchange", onFullScreenChanged);
		};
	}, []);

	return (
		<button
			type="button"
			data-action="true"
			className={cx("button", className)}
			onClick={toggleFullScreen}
		>
			{isFullScreen && (
				<Icon name="fullscreen_exit" />
			)}

			{!isFullScreen && (
				<Icon name="fullscreen" />
			)}
		</button>
	);
};

ButtonFullscreen.propTypes = {
	fullScreenElementRef: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default ButtonFullscreen;
