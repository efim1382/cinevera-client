import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import Button from "components/BasicButton";
import Swiper from "components/Swiper/Swiper";
import PopularList from "@master/components/PopularList";
import DetailsPageWrapper from "@master/components/MovieDetails/DetailsPageWrapper";
import DetailsPageOverview from "@master/components/MovieDetails/DetailsPageOverview";
import DetailsPageVideos from "@master/components/MovieDetails/DetailsPageVideos";
import DetailsPageCast from "@master/components/MovieDetails/DetailsPageCast";
import SeasonDetailsSuspence from "@master/containers/Series/components/SeriesDetailsSuspence";
import { getSeriesDetails } from "api/movies.api";
import episodesSliderBreakpoints from "@master/containers/Series/config/spisodesBreakpoints";
import style from "./style.css";

const SeasonDetails = () => {
	const { id, seasonId } = useParams();
	const [seriesData, setSeriesData] = useState({});
	const [isFetchProcess, setIsFetchProcess] = useState(false);

	const {
		title,
		fullDescription,
		ageLimit,
		year = [],
		genres = [],
		seasons = [],
	} = seriesData;

	const currentSeason = seasons.find((item) => `${item.number}` === `${seasonId}`) || {};

	const {
		backgroundUrl,
		episodes = [],
		videos = [],
		cast = [],
	} = currentSeason;

	const isSeriesLoaded = Object.keys(seriesData).length > 0;

	useEffect(() => {
		if (!isSeriesLoaded) {
			setIsFetchProcess(true);

			getSeriesDetails(id)
				.then(({ series }) => {
					setSeriesData(series);
					setIsFetchProcess(false);
				});
		}
	}, []);

	if (!isSeriesLoaded || isFetchProcess) {
		return <SeasonDetailsSuspence />;
	}

	return (
		<DetailsPageWrapper
			backgroundImage={backgroundUrl}
			className={style.details}
		>
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

			<DetailsPageOverview
				genres={genres}
				description={fullDescription}
				className={style.overview}
			/>

			<DetailsPageVideos
				videos={videos}
				className={style.videos}
			/>

			<DetailsPageCast
				cast={cast}
				className={style.cast}
			/>

			<PopularList
				title="Popular on cinevera"
				type="series"
				className={style.popular}
			/>
		</DetailsPageWrapper>
	);
};

export default SeasonDetails;
