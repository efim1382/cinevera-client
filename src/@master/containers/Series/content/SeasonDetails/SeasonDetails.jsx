import React, { useState, useMemo } from "react";
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
import useDetailsData from "@master/hooks/useDetailsData";
import { formatSeriesYear } from "helpers/movieHelpers";
import style from "./style.css";

const SeasonDetails = () => {
	const { seasonId } = useParams();
	const data = useDetailsData();
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
	} = data;

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

	const isAllSeasonsActionButtonShown = seasons.length > 1 && !isEpisodesExist;

	const openAllSeasons = () => setIsAllSeasonsShown(true);
	const closeAllSeasons = () => setIsAllSeasonsShown(false);

	const episodesListProps = {};

	if (episodes.length > 0 && seasons.length > 1) {
		episodesListProps["titleAction"] = {
			text: "All Seasons",
			onClick: openAllSeasons,
		};
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
								onClick={openAllSeasons}
								className={style.link_button}
							>
								All Seasons
							</button>
						)}
					</div>
				</div>
			</section>

			{isEpisodesExist && (
				<EpisodesList
					title={episodesTitle}
					items={episodes}
					className={style.episodes}
					{...episodesListProps}
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
