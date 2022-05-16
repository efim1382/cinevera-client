import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import Button from "components/BasicButton";
import Swiper from "components/Swiper/Swiper";
import MovieCard from "components/MovieCard";
import { fetchMovie, loadObjects } from "actions/movies.actions";
import { getObjectsList } from "api/movies.api";
import * as moviesSelectors from "selectors/movies.selectors";
import { getGenreByCode } from "config/genres";
import { addBackgroundOpacityOnScroll } from "./helpers/scrollHelper";
import castSliderBreakpoints from "@master/containers/Series/Details/castBreakpoints";
import videosSliderBreakpoints from "./videosBreakpoints";
import { moviesSliderBreakpoints } from "config/adaptability";
import style from "./style.css";

const scrollAnimationConfig = {
	backgroundOpacityFrom: 0.4,
	backgroundOpacityTo: 0.9,
	fullOpacityFrom: 400,
	elementId: "film-details",
	cssVariable: "--background-opacity",
};

const FilmDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [popularIds, setPopularIds] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	const isLoaded = useSelector(moviesSelectors.isMovieLoaded(id));
	const details = useSelector(moviesSelectors.getMovieData(id));

	const {
		title,
		fullDescription,
		backgroundUrl,
		ageLimit,
		year = [],
		genres = [],
		videos = [],
	} = details;

	let { cast = [] } = details;

	// filter non-populated actors
	cast = cast.filter((item) => typeof item.actor === "object");

	const isVideosExist = videos.length > 0;
	const isCastExist = cast.length > 0;

	const rootInline = {};

	if (isLoaded && backgroundUrl) {
		rootInline["backgroundImage"] = `url(${backgroundUrl})`;
	}

	const onScroll = () => {
		addBackgroundOpacityOnScroll(scrollAnimationConfig);
	};

	const onVideoMouseOver = (event) => event.target.setAttribute("controls", "");
	const onVideoMouseOut = (event) => event.target.removeAttribute("controls");

	useEffect(() => {
		if (!isLoaded) {
			dispatch(fetchMovie(id));
		}

		getObjectsList({ limit: 10 })
			.then(({ result }) => {
				dispatch(loadObjects(result));
				const ids = result.map((item) => item._id);
				setPopularIds(ids);
			});

		document.addEventListener("scroll", onScroll, true);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	if (!isLoaded) {
		return null;
	}

	return (
		<main id={scrollAnimationConfig.elementId} className={style.film_details} style={rootInline}>
			<section className={style.description}>
				<div className="container">
					<h1 className={style.title}>{title}</h1>

					<div className={style.additional_information}>
						<span className={style.match}>98% Match</span>

						{year && (
							<span className={style.year}>{year[0]}</span>
						)}

						{ageLimit && (
							<span className={style.age_limit}>{ageLimit}+</span>
						)}
					</div>

					<Button
						text="Resume"
						className={style.play_button}
					/>
				</div>
			</section>

			<section className={style.overview}>
				<div className="container">
					<div className={style.section}>
						<h2 className={style.subtitle}>Overview</h2>
						<p className={style.text}>{fullDescription}</p>
					</div>

					<div className={style.genres}>
						<h2 className={style.subtitle}>Genres</h2>

						{!!genres.length && (
							genres.map((code) => {
								const { label } = getGenreByCode(code) || {};

								if (!label) {
									return null;
								}

								return (
									<NavLink key={code} to="/" className={style.item}>{label}</NavLink>
								);
							})
						)}
					</div>
				</div>
			</section>

			{isVideosExist && (
				<section className={style.videos}>
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
			)}

			{isCastExist && (
				<section className={style.cast}>
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
			)}

			<section className={style.popular}>
				<div className="container">
					<h2 className={style.subtitle}>Popular</h2>

					<div className={style.popular_container}>
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
		</main>
	);
};

export default FilmDetails;
