import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import { addBackgroundOpacityOnScroll } from "./scrollHelper";
import style from "./style.css";

const cx = classnames.bind(style);

const scrollAnimationConfig = {
	backgroundOpacityFrom: 0.2,
	backgroundOpacityTo: 0.9,
	fullOpacityFrom: 400,
	elementId: "details-page",
	cssVariable: "--background-opacity",
};

const DetailsPageWrapper = (props) => {
	const {
		backgroundImage,
		className,
		children,
	} = props;

	const inline = { backgroundImage: `url(${backgroundImage})` };

	const onScroll = () => {
		addBackgroundOpacityOnScroll(scrollAnimationConfig);
	};

	useEffect(() => {
		document.addEventListener("scroll", onScroll, true);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<main
			id={scrollAnimationConfig.elementId}
			className={cx("details_page", className)}
			style={inline}
		>
			<div className={style.main_background_image} style={inline}></div>
			{children}
		</main>
	);
};

DetailsPageWrapper.propTypes = {
	backgroundImage: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default DetailsPageWrapper;
