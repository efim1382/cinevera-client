import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Swiper from "components/Swiper/Swiper";
import MovieCard from "components/MovieCard";
import { getPopular } from "api/movies.api";
import { loadObjects } from "actions/movies.actions";
import { moviesSliderBreakpoints } from "config/adaptability";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const PopularList = (props) => {
	const { title, type, className } = props;
	const { id } = useParams();
	const dispatch = useDispatch();

	const [popularIds, setPopularIds] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	const [isLoaded, setIsLoaded] = useState(false);

	const isNoResult = isLoaded && popularIds.length === 0;

	useEffect(() => {
		getPopular({ type, excludeId: id })
			.then(({ result }) => {
				dispatch(loadObjects(result));
				const ids = result.map((item) => item._id);
				setPopularIds(ids);
				setIsLoaded(true);
			})

			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (isNoResult) {
		return null;
	}

	return (
		<section className={cx("popular", className)}>
			<div className="container">
				<h2 className={style.subtitle}>{title}</h2>

				<div className={style.popular_slider}>
					<Swiper breakpoints={moviesSliderBreakpoints}>
						{popularIds.map((item) => (
							<SwiperSlide key={item}>
								<MovieCard id={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

PopularList.defaultProps = {
	title: "Popular on cinevera",
};

PopularList.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string,
	className: PropTypes.string,
};

export default PopularList;
