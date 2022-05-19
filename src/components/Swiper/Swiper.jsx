import React from "react";
import PropTypes from "prop-types";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

const SwiperComponent = ({ children, ...swiperProps }) => {
	return (
		<Swiper
			modules={[Mousewheel]}
			mousewheel={{ forceToAxis: true }}
			{...swiperProps}
		>
			{children}
		</Swiper>
	);
};

SwiperComponent.propTypes = {
	children: PropTypes.any.isRequired,
};

export default SwiperComponent;

export { SwiperSlide };
