import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Swiper from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import videosSliderBreakpoints from "./breakpoints";
import style from "./style.css";

const cx = classnames.bind(style);

const videoTypeNames = {
	trailer: "Trailer",
	video: "Video",
};

const DetailsPageVideos = (props) => {
	const {
		videos,
		className,
	} = props;

	const isVideosExist = videos.length > 0;

	if (!isVideosExist) {
		return null;
	}

	return (
		<section className={cx("videos", className)}>
			<div className="container">
				<h2 className={style.subtitle}>Videos</h2>

				<div className={style.trailer_container}>
					<Swiper breakpoints={videosSliderBreakpoints}>
						{videos.map((item) => {
							const videoType = videoTypeNames[item.type] || "Video";
							const inline = { backgroundImage: `url(${item.posterUrl})` };

							return (
								<SwiperSlide key={item.posterUrl}>
									<button type="button" className={style.video} style={inline}>
										<span className={style.type}>{videoType}</span>
									</button>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

DetailsPageVideos.defaultProps = {
	videos: [],
};

DetailsPageVideos.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.shape({
		posterUrl: PropTypes.string.isRequired,
		videoUrl: PropTypes.string.isRequired,
		type: PropTypes.string,
	})),

	className: PropTypes.string,
};

export default DetailsPageVideos;
