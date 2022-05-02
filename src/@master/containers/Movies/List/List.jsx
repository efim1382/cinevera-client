import React, { useState, useEffect } from "react";
import Icon from "components/Icon";
import MovieCard from "components/MovieCard";
import { getMoviesList } from "api/movies.api";
import style from "./style.css";

const MoviesListContainer = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMoviesList()
			.then(({ movies }) => {
				setMovies(movies);
			});
	}, []);

	return (
		<main className={style.movies}>
			<div className={style.main_block}>
				<div className="container">
					<h2 className={style.title}>Movies</h2>

					<div className={style.categories}>
						<button className={style.item}>Drama</button>
						<button className={style.item}>Adventure</button>
						<button className={style.item}>Comedy</button>
						<button className={style.item}>Thriller</button>
						<button className={style.item}>Documentary</button>
						<button className={style.item}>Criminal</button>
						<button className={style.item}>Animation</button>
						<button className={style.item}>Action</button>
						<button className={style.item}>Detective</button>
						<button className={style.item}>Action</button>
						<button className={style.item}>Romantic</button>
						<button className={style.item}>Historical</button>
					</div>

					<div className={style.sorting}>
						<p className={style.caption}>Sort By</p>
						<div className={style.dropdown}>Year</div>

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
				<div className="container">
					{movies.map((item) => {
						return (
							<MovieCard
								key={item._id}
								link={`/movies/details/${item._id}`}
								name={item.name}
								description={item.description}
								image={item.preview}
								className={style.movie}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default MoviesListContainer;
