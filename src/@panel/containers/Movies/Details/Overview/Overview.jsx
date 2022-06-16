import React, { useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import Icon from "components/Icon";
import LoadingRing from "components/LoadingRing";
import GenreItem from "@panel/components/GenreItem";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

const Overview = () => {
	const { id: movieId } = useParams();
	const [castRemovingId, setCastRemovingId] = useState(null);
	const { state, actions } = useContext(MovieDetailsContext);
	const { data } = state;

	const {
		shortDescription,
		fullDescription,
		year,
		ageLimit = 0,
		genres = [],
		cast = [],
	} = data;

	const formattedYear = year ? year[0] : "";

	const removeActor = (id) => {
		const filteredCast = cast
			.filter((item) => item.actor.id !== id)

			.map((item) => ({
				...item,
				actor: item.actor.id,
			}));

		setCastRemovingId(id);

		updateMovie(movieId, { cast: filteredCast })
			.then(({ movie }) => {
				actions.setData(movie);
				setCastRemovingId(null);
			})
			.catch((error) => {
				setCastRemovingId(null);
				console.log(error);
			});
	};

	return (
		<div className={style.overview}>
			<section className={style.section}>
				<h3 className={style.subtitle}>Information</h3>

				<div className={style.details_info}>
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
				</div>
			</section>

			<section className={style.section}>
				<h3 className={style.subtitle}>Poster Description</h3>
				<p className={style.text}>{shortDescription}</p>
			</section>

			<section className={style.section}>
				<h3 className={style.subtitle}>Full Description</h3>
				<p className={style.text}>{fullDescription}</p>
			</section>

			<section className={style.section}>
				<h3 className={style.subtitle}>Genres</h3>

				<div className={style.genres}>
					{genres.map((code) => (
						<GenreItem key={code} code={code} />
					))}
				</div>
			</section>

			<section className={style.section}>
				<h3 className={style.subtitle}>Top Cast</h3>

				<div className={style.cast_list}>
					<NavLink to={{ search: "?add-cast" }} className={style.item}>
						<div className={style.empty_photo}>
							<Icon name="add" />
						</div>

						<p className={style.add_text}>Add actor</p>
					</NavLink>

					{cast.map((item) => {
						const inline = { backgroundImage: `url(${item.actor.photo})` };
						const isLoading = castRemovingId === item.actor.id;

						const onRemove = () => {
							removeActor(item.actor.id);
						};

						return (
							<div key={item.actor.id} className={style.item}>
								<div className={style.photo} style={inline} />

								<div className={style.information}>
									<p className={style.name}>{item.actor.name}</p>
									<p className={style.character}>{item.characterName}</p>
								</div>

								<button type="button" className={style.delete} onClick={onRemove}>
									<Icon name="delete" />

									{isLoading && (
										<LoadingRing isShown className={style.loading} />
									)}
								</button>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Overview;
