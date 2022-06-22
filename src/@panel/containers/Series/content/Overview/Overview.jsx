import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ObjectStatus from "@panel/components/ObjectStatus";
import DetailsSection from "@panel/components/DetailsSection";
import EditableContent from "@panel/components/EditableContent";
import EditableGenres from "@panel/components/EditableGenres";
import EditableCast from "@panel/components/EditableCast";
import useDetailsData from "@panel/hooks/useDetailsData";
import { updateSeries } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/store/MovieDetails.store";
import { formatSeriesYear } from "helpers/movieHelpers";
import style from "./style.css";

const Overview = () => {
	const {
		status,
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

	const formattedYear = formatSeriesYear(year);

	const onShortDescriptionBlur = (value) => {
		setIsShortDescriptionUpdating(true);

		updateSeries(seriesId, { shortDescription: value })
			.then(({ series }) => {
				actions.setData(series);
				setIsShortDescriptionUpdating(false);
			})
			.catch((error) => {
				setIsShortDescriptionUpdating(false);
				console.log(error);
			});
	};

	const onFullDescriptionBlur = (value) => {
		setIsFullDescriptionUpdating(true);

		updateSeries(seriesId, { fullDescription: value })
			.then(({ series }) => {
				actions.setData(series);
				setIsFullDescriptionUpdating(false);
			})
			.catch((error) => {
				setIsFullDescriptionUpdating(false);
				console.log(error);
			});
	};

	const addGenres = (values) => {
		return updateSeries(seriesId, { genres: [...genres, ...values.genres] })
			.then(({ series }) => {
				actions.setData(series);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const removeGenre = (code) => {
		const filteredGenres =	genres.filter((genre) => genre !== code);

		return updateSeries(seriesId, { genres: filteredGenres })
			.then(({ series }) => {
				actions.setData(series);
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

		return updateSeries(seriesId, { cast: filteredCast })
			.then(({ series }) => {
				actions.setData(series);
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

		return updateSeries(seriesId, { cast: filteredCast })
			.then(({ series }) => {
				actions.setData(series);
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
					<ObjectStatus code={status} />
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
