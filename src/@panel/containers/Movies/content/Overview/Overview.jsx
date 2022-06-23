import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Switcher from "components/FormElements/Switcher";
import ObjectStatus from "@panel/components/ObjectStatus";
import DetailsSection from "@panel/components/DetailsSection";
import EditableContent from "@panel/components/EditableContent";
import EditableGenres from "@panel/components/EditableGenres";
import EditableCast from "@panel/components/EditableCast";
import useDetailsData from "@panel/hooks/useDetailsData";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/store/MovieDetails.store";
import style from "./style.css";

export const isObjectHasRequiredData = (data = {}) => {
	const {
		shortDescription,
		fullDescription,
		year = [],
		ageLimit,
		backgroundUrl,
		posterUrl,
	} = data;

	return !!shortDescription
		&& !!fullDescription
		&& !!ageLimit
		&& !!backgroundUrl
		&& !!posterUrl
		&& year.length > 0;
};

const Overview = () => {
	const detailsData = useDetailsData();

	const {
		status,
		shortDescription,
		fullDescription,
		year,
		ageLimit = 0,
		genres = [],
		cast = [],
	} = detailsData;

	const { id: movieId } = useParams();
	const { actions } = useContext(MovieDetailsContext);

	const [isStatusUpdating, setIsStatusUpdating] = useState(false);
	const [isStatusCheckboxChecked, setIsStatusCheckboxChecked] = useState(status === "visible");
	const [isShortDescriptionUpdating, setIsShortDescriptionUpdating] = useState(false);
	const [isFullDescriptionUpdating, setIsFullDescriptionUpdating] = useState(false);

	const formattedYear = year ? year[0] : "";
	const isStatusSwitcherDisabled = !isObjectHasRequiredData(detailsData) && status !== "visible";

	const updateStatus = () => {
		if (isStatusUpdating) {
			return;
		}

		setIsStatusUpdating(true);
		setIsStatusCheckboxChecked(!isStatusCheckboxChecked);

		updateMovie(movieId, { status: isStatusCheckboxChecked ? "hidden" : "visible" })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsStatusCheckboxChecked(movie.status === "visible");
				setIsStatusUpdating(false);
			})

			.catch((error) => {
				setIsStatusUpdating(false);
				console.log(error);
			});
	};

	const onShortDescriptionBlur = (value) => {
		setIsShortDescriptionUpdating(true);

		updateMovie(movieId, { shortDescription: value })
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

		updateMovie(movieId, { fullDescription: value })
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
		return updateMovie(movieId, { genres: [...genres, ...values.genres] })
			.then(({ movie }) => {
				actions.setData(movie);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const removeGenre = (code) => {
		const filteredGenres =	genres.filter((genre) => genre !== code);

		return updateMovie(movieId, { genres: filteredGenres })
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

		return updateMovie(movieId, { cast: filteredCast })
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

		return updateMovie(movieId, { cast: filteredCast })
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

					<div className={style.status_value}>
						<ObjectStatus code={status} className={style.status} />

						<Switcher
							isChecked={isStatusCheckboxChecked}
							onChange={updateStatus}
							isDisabled={isStatusSwitcherDisabled}
							className={style.switch}
						/>
					</div>
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
