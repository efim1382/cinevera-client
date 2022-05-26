import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "../style.css";

const cx = classnames.bind(style);

const ButtonFullscreen = ({ className, videoRef }) => {
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

	const onKeyDown = (event) => {
		if (event.code === "ArrowLeft") {
			goBack();
		}

		if (event.code === "ArrowRight") {
			goForward();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<Fragment>
			<button type="button" data-action="true" className={cx("button", className)} onClick={goBack}>
				<Icon name="replay_10" />
			</button>

			<button type="button" data-action="true" className={cx("button", className)} onClick={goForward}>
				<Icon name="forward_10" />
			</button>
		</Fragment>
	);
};

ButtonFullscreen.propTypes = {
	videoRef: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default ButtonFullscreen;
