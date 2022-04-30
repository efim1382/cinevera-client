import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "./style.css";

const SwiperComponent = ({ children, ...swiperProps }) => {
	return (
		<Swiper {...swiperProps}>
			{children}
		</Swiper>
	);
};

SwiperComponent.propTypes = {
	children: PropTypes.any.isRequired,
};

export default SwiperComponent;

export { SwiperSlide };
