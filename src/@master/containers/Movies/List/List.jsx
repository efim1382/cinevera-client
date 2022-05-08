import React, { useContext } from "react";
import MovieCard from "components/MovieCard";
import EmptyMessage from "components/EmptyMessage";
import Filters from "./Filters";
import { MoviesListContext } from "./MoviesListProvider";
import style from "./style.css";

const defaultEmptyMovies = [...Array(20).keys()];

const MoviesListContainer = () => {
	const { state } = useContext(MoviesListContext);

	const {
		ids,
		isFetchComplete,
		isRequestProcess,
	} = state;

	const moviesIds = !isFetchComplete && isRequestProcess
		? defaultEmptyMovies
		: ids;

	const isEmptyMessageShown = isFetchComplete && moviesIds.length === 0;
	const isMoviesExist = !isEmptyMessageShown && moviesIds.length > 0;

	return (
		<main className={style.movies}>
			<div className={style.title_block}>
				<div className="container">
					<h2 className={style.title}>Movies</h2>
				</div>
			</div>

			<Filters className={style.filters} />

			<div className={style.list}>
				{isMoviesExist && (
					<div className="container">
						{moviesIds.map((id) => {
							return (
								<MovieCard
									key={id}
									id={id}
									className={style.movie}
								/>
							);
						})}
					</div>
				)}

				{isEmptyMessageShown && (
					<EmptyMessage text="There is no movies" className={style.empty_message} />
				)}
			</div>
		</main>
	);
};

export default MoviesListContainer;
