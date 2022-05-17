import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Swiper from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import castSliderBreakpoints from "./breakpoints";
import style from "./style.css";

const cx = classnames.bind(style);

const DetailsPageCast = (props) => {
	const {
		cast,
		className,
	} = props;

	const isCastExist = cast.length > 0;

	if (!isCastExist) {
		return null;
	}

	return (
		<section className={cx("cast", className)}>
			<div className="container">
				<h2 className={style.subtitle}>Cast</h2>

				<div className={style.cast_list}>
					<Swiper breakpoints={castSliderBreakpoints}>
						{cast.map((item) => {
							const inline = {};

							if (item.actor.photo) {
								inline["backgroundImage"] = `url(${item.actor.photo})`;
							}

							return (
								<SwiperSlide key={item.actor._id}>
									<div key={item.actor._id} className={style.actor}>
										<div className={style.avatar} style={inline} />

										<div className={style.actor_data}>
											<p className={style.name}>{item.actor.name}</p>
											<p className={style.character}>{item.characterName}</p>
										</div>
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

DetailsPageCast.defaultProps = {
	cast: [],
};

DetailsPageCast.propTypes = {
	cast: PropTypes.arrayOf(PropTypes.shape({
		actor: PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			photo: PropTypes.string.isRequired,
		}).isRequired,

		characterName: PropTypes.string.isRequired,
	})),

	className: PropTypes.string,
};

export default DetailsPageCast;
