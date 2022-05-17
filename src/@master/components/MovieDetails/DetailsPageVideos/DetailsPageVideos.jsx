import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Swiper from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import videosSliderBreakpoints from "./breakpoints";
import style from "./style.css";

const cx = classnames.bind(style);

const DetailsPageVideos = (props) => {
	const {
		videos,
		className,
	} = props;

	const isVideosExist = videos.length > 0;

	const onVideoMouseOver = (event) => event.target.setAttribute("controls", "");
	const onVideoMouseOut = (event) => event.target.removeAttribute("controls");

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
							return (
								<SwiperSlide key={item.posterUrl}>
									<div className={style.video_wrapper}>
										<video
											poster={item.posterUrl}
											src={item.videoUrl}
											onMouseOver={onVideoMouseOver}
											onMouseOut={onVideoMouseOut}
											className={style.video}
										/>
									</div>
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
