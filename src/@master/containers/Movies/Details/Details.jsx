import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import Button from "components/BasicButton";
import Swiper from "components/Swiper/Swiper";
import { fetchMovie } from "actions/movies.actions";
import * as moviesSelectors from "selectors/movies.selectors";
import { getGenreByCode } from "config/genres";
import { addBackgroundOpacityOnScroll } from "./helpers/scrollHelper";
import videosSliderBreakpoints from "./videosBreakpoints";
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

	const isVideosExist = videos.length > 0;

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

			<section className={style.photos}>
				<div className="container">
					<h2 className={style.subtitle}>Photos</h2>

					<div className={style.photos_container}>
						<div className={style.actor_photos} />
						<div className={style.actor_photos} />
						<div className={style.actor_photos} />
					</div>
				</div>
			</section>

			<section className={style.cast}>
				<div className="container">
					<h2 className={style.subtitle}>Cast</h2>

					<div className={style.cast_list}>
						{[1, 2, 3].map((i) => (
							<div key={i} className={style.actor}>
								<div className={style.avatar} />

								<div className={style.actor_data}>
									<p className={style.name}>Gerrard Butler</p>
									<p className={style.character}>Gerrard Butler</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={style.popular}>
				<div className="container">
					<h2 className={style.subtitle}>Popular</h2>

					<div className={style.popular_container}>
						<div className={style.film_page} />
						<div className={style.film_page} />
						<div className={style.film_page} />
						<div className={style.film_page} />
					</div>
				</div>
			</section>
		</main>
	);
};

export default FilmDetails;
