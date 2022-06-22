import React from "react";
import Button from "components/BasicButton";
import PopularList from "@master/components/PopularList";

import {
	DetailsPageWrapper,
	DetailsPageOverview,
	DetailsPageVideos,
	DetailsPageCast,
} from "@master/components/MovieDetails";

import useDetailsData from "@master/hooks/useDetailsData";
import style from "./style.css";

const MovieDetails = () => {
	const data = useDetailsData();

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
	} = data;

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
