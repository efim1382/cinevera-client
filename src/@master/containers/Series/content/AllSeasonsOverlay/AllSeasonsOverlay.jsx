import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import Overlay from "components/Overlay";
import Swiper from "components/Swiper/Swiper";
import style from "./style.css";

const pagination = {
	clickable: true,

	renderBullet: (index, className) => {
		return `<span class="${ className }">${ index + 1 }</span>`;
	},
};

const AllSeasonsOverlay = ({ onClose, seasons }) => {
	const { id, seasonId } = useParams();
	const navigate = useNavigate();

	const parsedSeasonId = parseInt(seasonId);
	const initialSlideIndex = parsedSeasonId - 1;

	return (
		<Overlay onClose={onClose} className={style.overlay}>
			<div className={style.episodes_list}>
				<Swiper
					initialSlide={initialSlideIndex}
					pagination={pagination}
					modules={[Pagination]}
					breakpoints={sliderConfig}
				>
					{seasons.map((item) => {
						const inline = { backgroundImage: `url(${item.backgroundUrl})` };

						const chooseSeason = () => {
							navigate(`/series/details/${id}/season/${item.number}`);
							onClose();
						};

						return (
							<SwiperSlide key={item.number}>
								<button type="button" onClick={chooseSeason} className={style.season} style={inline}>
									<span className={style.text}>Season {item.number}</span>
								</button>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</Overlay>
	);
};

export const sliderConfig = {
	0: {
		slidesPerView: 1,
		spaceBetween: 200,
	},
};

AllSeasonsOverlay.defaultProps = {
	onClose: Function(),
};

AllSeasonsOverlay.propTypes = {
	onClose: PropTypes.func.isRequired,

	seasons: PropTypes.arrayOf(PropTypes.shape({
		backgroundUrl: PropTypes.string.isRequired,
		number: PropTypes.number.isRequired,
	})).isRequired,
};

export default AllSeasonsOverlay;
