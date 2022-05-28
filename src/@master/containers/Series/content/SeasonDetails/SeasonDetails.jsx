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

import AllSeasonsOverlay from "@master/containers/Series/content/AllSeasonsOverlay";
import SeasonDetailsSuspence from "@master/containers/Series/components/SeriesDetailsSuspence";
import { getSeriesDetails } from "api/movies.api";
import style from "./style.css";

const SeasonDetails = () => {
	const { id, seasonId } = useParams();
	const [seriesData, setSeriesData] = useState({});
	const [isFetchProcess, setIsFetchProcess] = useState(false);
	const [isAllSeasonsShown, setIsAllSeasonsShown] = useState(false);

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

	const episodesTitle = seasons.length > 1
		? `Season ${seasonId}`
		: "Episodes";

	const isSeriesLoaded = Object.keys(seriesData).length > 0;

	const openAllSeasons = () => setIsAllSeasonsShown(true);
	const closeAllSeasons = () => setIsAllSeasonsShown(false);

	const seasonsTitleActionProps = {
		text: "All seasons",
		onClick: openAllSeasons,
	};

	const loadSeries = () => {
		setIsFetchProcess(true);

		getSeriesDetails(id)
			.then(({ series }) => {
				setSeriesData(series);
				setIsFetchProcess(false);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (!isSeriesLoaded) {
			loadSeries();
		}
	}, []);

	useEffect(() => {
		setSeriesData({});
		loadSeries();
	}, [id, seasonId]);

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
						text="Watch"
						className={style.play_button}
					/>
				</div>
			</section>

			<EpisodesList
				title={episodesTitle}
				items={episodes}
				titleAction={seasonsTitleActionProps}
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

			{isAllSeasonsShown && (
				<AllSeasonsOverlay
					onClose={closeAllSeasons}
					seasons={seasons}
				/>
			)}
		</DetailsPageWrapper>
	);
};

export default SeasonDetails;
