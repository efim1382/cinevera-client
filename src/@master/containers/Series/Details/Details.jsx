import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/BasicButton";
import Icon from "components/Icon";
import Swiper from "components/Swiper/Swiper";
import { fetchSeriesDetails } from "actions/movies.actions";
import * as moviesSelectors from "selectors/movies.selectors";
import { getGenreByCode } from "config/genres";
import { addBackgroundOpacityOnScroll } from "./helpers/scrollHelper";
import episodesSliderBreakpoints from "./spisodesBreakpoints";
import style from "./style.css";

const scrollAnimationConfig = {
	backgroundOpacityFrom: 0.4,
	backgroundOpacityTo: 0.9,
	fullOpacityFrom: 400,
	elementId: "film-details",
	cssVariable: "--background-opacity",
};

const FilmDetails = () => {
	const { id, seasonId } = useParams();
	const dispatch = useDispatch();
	const isLoaded = useSelector(moviesSelectors.isMovieLoaded(id));
	const details = useSelector(moviesSelectors.getMovieData(id));

	const {
		title,
		fullDescription,
		ageLimit,
		year = [],
		genres = [],
		seasons = [],
	} = details;

	const currentSeason = seasons.find((item) => `${item.number}` === `${seasonId}`) || {};

	const {
		backgroundUrl,
		episodes = [],
	} = currentSeason;

	const isFullDetailsLoaded = isLoaded && seasons.length > 0 && typeof seasons[0] === "object";

	const rootInline = {};

	if (isFullDetailsLoaded && backgroundUrl) {
		rootInline["backgroundImage"] = `url(${backgroundUrl})`;
	}

	const onScroll = () => {
		addBackgroundOpacityOnScroll(scrollAnimationConfig);
	};

	useEffect(() => {
		if (!isFullDetailsLoaded) {
			dispatch(fetchSeriesDetails(id));
		}

		document.addEventListener("scroll", onScroll, true);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	if (!isFullDetailsLoaded) {
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
							<span className={style.year}>{year[0]} - {year[1]}</span>
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

			<section className={style.season}>
				<div className="container">
					<div className={style.subtitle_wrapper}>
						<h2 className={style.subtitle}>Season 1</h2>
						<button type="button" className={style.all_seasons}>All seasons</button>
					</div>

					<div className={style.episodes_list}>
						<Swiper breakpoints={episodesSliderBreakpoints}>
							{episodes.map((item) => {
								const formattedNumber = item.number < 10
									? `0${item.number}`
									: item.number;

								const inline = { backgroundImage: `url(${item.posterUrl})` };

								return (
									<SwiperSlide key={item._id}>
										<button type="button" className={style.episode_item} style={inline}>
											<span className={style.number}>{formattedNumber}</span>
											<p className={style.episode_name}>{item.title}</p>
										</button>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
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

			<section className={style.videos}>
				<div className="container">
					<h2 className={style.subtitle}>Trailer</h2>

					<div className={style.trailer_container}>

						<button type="button" className={style.play_button}>
							<div className={style.trailer}>
								<div className={style.trailer_details}>
									<Icon name="play" />

									<p className={style.trailer_duration}>
										Trailer
										<span className={style.duration}>0:55</span>
									</p>
								</div>
							</div>
						</button>

						<button type="button" className={style.play_button}>
							<div className={style.trailer}>
								<div className={style.trailer_details}>
									<Icon name="play" />

									<p className={style.trailer_duration}>
										Trailer
										<span className={style.duration}>0:55</span>
									</p>
								</div>
							</div>
						</button>

						<button type="button" className={style.play_button}>
							<div className={style.trailer}>
								<div className={style.trailer_details}>
									<Icon name="play" />

									<p className={style.trailer_duration}>
										Trailer
										<span className={style.duration}>0:55</span>
									</p>
								</div>
							</div>
						</button>
					</div>
				</div>
			</section>

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
