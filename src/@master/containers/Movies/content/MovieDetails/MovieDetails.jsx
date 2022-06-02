import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "components/BasicButton";
import PopularList from "@master/components/PopularList";

import {
	DetailsPageWrapper,
	DetailsPageOverview,
	DetailsPageVideos,
	DetailsPageCast,
} from "@master/components/MovieDetails";

import DetailsSuspence from "@master/containers/Movies/components/MovieDetailsSuspence";
import { getMovieDetails } from "api/movies.api";
import style from "./style.css";

const MovieDetails = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState({});
	const [isFetchProcess, setIsFetchProcess] = useState(false);

	const {
		title,
		fullDescription,
		backgroundUrl,
		ageLimit,
		year = [],
		genres = [],
		videos = [],
		cast = [],
		video,
	} = movieData;

	const isMovieLoaded = Object.keys(movieData).length > 0;

	useEffect(() => {
		if (!isMovieLoaded) {
			setIsFetchProcess(true);

			getMovieDetails(id)
				.then(({ movie }) => {
					setMovieData(movie);
					setIsFetchProcess(false);
				});
		}
	}, []);

	if (!isMovieLoaded || isFetchProcess) {
		return <DetailsSuspence />;
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
							<span className={style.year}>{year[0]}</span>
						)}

						{ageLimit && (
							<span className={style.age_limit}>{ageLimit}+</span>
						)}
					</div>

					{video && (
						<Button
							text="Watch"
							to={`/watch/${video}/`}
							className={style.play_button}
						/>
					)}

					{!video && (
						<Button
							appearance="fill"
							theme="translucent"
							icon="bell"
							text="Notify when available"
							className={style.play_button}
						/>
					)}
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
				type="movie"
				className={style.popular_list}
			/>
		</DetailsPageWrapper>
	);
};

export default MovieDetails;
