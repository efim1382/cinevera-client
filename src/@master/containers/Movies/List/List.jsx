import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "components/Icon";
import MovieCard from "components/MovieCard";
import EmptyMessage from "components/EmptyMessage";
import { fetchMoviesList } from "actions/movies.actions";
import * as moviesSelectors from "selectors/movies.selectors";
import { genres } from "config/genres";
import style from "./style.css";

const itemsPerPage = 30;
const defaultEmptyMovies = [...Array(itemsPerPage).keys()];

const MoviesListContainer = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(moviesSelectors.isLoading);
	const isLoaded = useSelector(moviesSelectors.isLoaded);
	const moviesIds = useSelector(moviesSelectors.getMoviesListIds);

	const ids = !isLoaded && isLoading
		? defaultEmptyMovies
		: moviesIds;

	const isEmptyMessageShown = isLoaded && moviesIds.length === 0;
	const isMoviesExist = !isEmptyMessageShown && ids.length > 0;

	useEffect(() => {
		if (!isLoaded && !isLoading) {
			dispatch(fetchMoviesList());
		}
	}, []);

	return (
		<main className={style.movies}>
			<div className={style.main_block}>
				<div className="container">
					<h2 className={style.title}>Movies</h2>

					<div className={style.categories}>
						{genres.map((item) => (
							<button key={item.value} className={style.item}>
								<span>{item.label}</span>
							</button>
						))}
					</div>

					<div className={style.sorting}>
						<p className={style.caption}>Sort By</p>
						<button className={style.dropdown}>
							<span>Year</span>
							<Icon name="drop_down" />
						</button>

						<div className={style.rating}>
							<Icon name="star" />

							<div className={style.slider}>
								<div className={style.circle} />
							</div>

							<p className={style.rating_text}>5.0</p>
						</div>
					</div>
				</div>
			</div>

			<div className={style.list}>
				{isMoviesExist && (
					<div className="container">
						{ids.map((id) => {
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
