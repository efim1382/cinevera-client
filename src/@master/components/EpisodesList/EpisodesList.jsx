import React from "react";
import PropTypes from "prop-types";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import Swiper from "components/Swiper/Swiper";
import episodesSliderBreakpoints from "./breakpoints";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const EpisodesList = (props) => {
	const {
		items,
		title,
		titleAction,
		className,
	} = props;

	return (
		<section className={cx("episodes", className)}>
			<div className="container">
				<div className={style.subtitle_wrapper}>
					<h2 className={style.subtitle}>{title}</h2>

					{titleAction && (
						<button
							type="button"
							onClick={titleAction.onClick}
							className={style.all_seasons}
						>
							{titleAction.text}
						</button>
					)}
				</div>

				<div className={style.episodes_list}>
					<Swiper breakpoints={episodesSliderBreakpoints}>
						{items.map((item) => {
							const link = item.video
								? `/watch/${item.video}`
								: "/";

							const formattedNumber = item.number && item.number < 10
								? `0${item.number}`
								: item.number;

							const inline = { backgroundImage: `url(${item.posterUrl})` };

							return (
								<SwiperSlide key={item._id}>
									<NavLink to={link} className={style.episode_item} style={inline}>
										{!!item.number && (
											<span className={style.number}>{formattedNumber}</span>
										)}

										<p className={style.episode_name}>{item.title}</p>
									</NavLink>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

EpisodesList.defaultProps = {
	items: [],
};

EpisodesList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		posterUrl: PropTypes.string.isRequired,
		number: PropTypes.number,
		title: PropTypes.string.isRequired,
	})),

	titleAction: PropTypes.shape({
		onClick: PropTypes.func,
		text: PropTypes.string,
	}),

	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default EpisodesList;
