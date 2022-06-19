import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DetailsSection from "@panel/components/DetailsSection";
import EditableContent from "@panel/components/EditableContent";
import EditableGenres from "@panel/components/EditableGenres";
import EditableCast from "@panel/components/EditableCast";
import useDetailsData from "@panel/containers/Movies/hooks/useDetailsData";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/store/MovieDetails.store";
import style from "./style.css";

const Overview = () => {
	const {
		shortDescription,
		fullDescription,
		year,
		ageLimit = 0,
		genres = [],
		cast = [],
	} = useDetailsData();

	const { id: seriesId } = useParams();
	const { actions } = useContext(MovieDetailsContext);

	const [isShortDescriptionUpdating, setIsShortDescriptionUpdating] = useState(false);
	const [isFullDescriptionUpdating, setIsFullDescriptionUpdating] = useState(false);

	const formattedYear = year ? year[0] : "";

	const onShortDescriptionBlur = (value) => {
		setIsShortDescriptionUpdating(true);

		updateMovie(seriesId, { shortDescription: value })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsShortDescriptionUpdating(false);
			})
			.catch((error) => {
				setIsShortDescriptionUpdating(false);
				console.log(error);
			});
	};

	const onFullDescriptionBlur = (value) => {
		setIsFullDescriptionUpdating(true);

		updateMovie(seriesId, { fullDescription: value })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsFullDescriptionUpdating(false);
			})
			.catch((error) => {
				setIsFullDescriptionUpdating(false);
				console.log(error);
			});
	};

	const addGenres = (values) => {
		return updateMovie(seriesId, { genres: [...genres, ...values.genres] })
			.then(({ movie }) => {
				actions.setData(movie);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const removeGenre = (code) => {
		const filteredGenres =	genres.filter((genre) => genre !== code);

		return updateMovie(seriesId, { genres: filteredGenres })
			.then(({ movie }) => {
				actions.setData(movie);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const addCast = (values) => {
		const filteredCast = [...cast, ...values.cast]
			.map((item) => ({
				...item,
				actor: item.actor.id || item.actor,
			}));

		return updateMovie(seriesId, { cast: filteredCast })
			.then(({ movie }) => {
				actions.setData(movie);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const removeCast = (id) => {
		const filteredCast = cast
			.filter((item) => item.actor.id !== id)

			.map((item) => ({
				...item,
				actor: item.actor.id,
			}));

		return updateMovie(seriesId, { cast: filteredCast })
			.then(({ movie }) => {
				actions.setData(movie);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className={style.overview}>
			<DetailsSection title="Information" className={style.section}>
				<div className={style.row}>
					<p className={style.label}>Status</p>
					<p className={style.value}>Available</p>
				</div>

				<div className={style.row}>
					<p className={style.label}>Year</p>
					<p className={style.value}>{formattedYear}</p>
				</div>

				<div className={style.row}>
					<p className={style.label}>Age Rating</p>
					<p className={style.value}>{ageLimit}+</p>
				</div>
			</DetailsSection>

			<DetailsSection
				title="Poster Description"
				isLoading={isShortDescriptionUpdating}
				className={style.section}
			>
				<EditableContent
					onBlur={onShortDescriptionBlur}
					defaultValue={shortDescription}
				/>
			</DetailsSection>

			<DetailsSection
				title="Full Description"
				isLoading={isFullDescriptionUpdating}
				className={style.section}
			>
				<EditableContent
					onBlur={onFullDescriptionBlur}
					defaultValue={fullDescription}
				/>
			</DetailsSection>

			<DetailsSection
				title="Genres"
				className={style.section}
			>
				<EditableGenres
					onAdd={addGenres}
					onRemove={removeGenre}
					items={genres}
				/>
			</DetailsSection>

			<DetailsSection
				title="Top Cast"
				className={style.section}
			>
				<EditableCast
					onAdd={addCast}
					onRemove={removeCast}
					items={cast}
				/>
			</DetailsSection>
		</div>
	);
};

export default Overview;
