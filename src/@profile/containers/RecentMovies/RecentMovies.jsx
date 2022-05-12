import React from "react";
import MovieCard from "components/MovieCard";
import style from "./style.css";

const RecentMovies = () => {
	return (
		<div className={style.recent_movies}>
			<div className="container">
				<div className={style.movies_list}>
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
					<MovieCard id={3} className={style.card} />
				</div>
			</div>
		</div>
	);
};

export default RecentMovies;
