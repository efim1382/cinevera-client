import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "components/BasicButton";
import PopularList from "@master/components/PopularList";
import EpisodesList from "@master/components/EpisodesList";

import {
	DetailsPageWrapper,
	DetailsPageOverview,
	DetailsPageVideos,
	DetailsPageCast,
} from "@master/components/MovieDetails";

import SeasonDetailsSuspence from "@master/containers/Series/components/SeriesDetailsSuspence";
import { getSeriesDetails } from "api/movies.api";
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

			<EpisodesList
				title="Episodes"
				items={episodes}
				titleAction={{ text: "All seasons" }}
				className={style.episodes}
			/>

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
