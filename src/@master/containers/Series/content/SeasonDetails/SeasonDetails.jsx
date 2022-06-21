import React, { useState, useEffect, useMemo } from "react";
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
import { formatSeriesYear } from "helpers/movieHelpers";
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
		backgroundUrl: seriesBackgroundUrl,
		year = [],
		genres = [],
		seasons = [],
		cast = [],
		videos = [],
	} = seriesData;

	const formattedYear = useMemo(() => (
		formatSeriesYear(year)
	), [year.length]);

	const currentSeason = seasons.find((item) => `${item.number}` === `${seasonId}`) || {};

	const {
		backgroundUrl: seasonBackgroundUrl,
		episodes = [],
	} = currentSeason;

	const backgroundUrl = 	seasonBackgroundUrl || seriesBackgroundUrl;
	const isEpisodesExist = episodes.length > 0;

	const episodesTitle = seasons.length > 1
		? `Season ${seasonId}`
		: "Episodes";

	const isSeriesLoaded = Object.keys(seriesData).length > 0;
	const isAllSeasonsActionButtonShown = seasons.length > 0 && !isEpisodesExist;

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
		if (!isFetchProcess) {
			loadSeries();
		}
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
						<span className={style.year}>{formattedYear}</span>

						{ageLimit && (
							<span className={style.age_limit}>{ageLimit}+</span>
						)}
					</div>

					<div className={style.actions}>
						{isEpisodesExist && (
							<Button
								text="Watch"
								className={style.play_button}
							/>
						)}

						{!isEpisodesExist && (
							<Button
								appearance="fill"
								theme="translucent"
								icon="bell"
								text="Notify when available"
								className={style.play_button}
							/>
						)}

						{isAllSeasonsActionButtonShown && (
							<button
								type="button"
								onClick={seasonsTitleActionProps.onClick}
								className={style.link_button}
							>
								{seasonsTitleActionProps.text}
							</button>
						)}
					</div>
				</div>
			</section>

			{isEpisodesExist && (
				<EpisodesList
					title={episodesTitle}
					items={episodes}
					titleAction={seasonsTitleActionProps}
					className={style.episodes}
				/>
			)}

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
