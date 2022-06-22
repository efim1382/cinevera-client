import React from "react";
import MovieCard from "components/MovieCard";
import EmptyMessage from "components/EmptyMessage";
import Filters from "@master/components/ObjectsListFilters";
import useObjectsListData from "@master/hooks/useObjectsListData";
import style from "./style.css";

const MoviesListContainer = () => {
	const state = useObjectsListData();

	const {
		ids,
		isFetchComplete,
	} = state;

	const isEmptyMessageShown = isFetchComplete && ids.length === 0;
	const isMoviesExist = !isEmptyMessageShown && ids.length > 0;

	return (
		<main className={style.series}>
			<div className={style.title_block}>
				<div className="container">
					<h2 className={style.title}>TV Series</h2>
				</div>
			</div>

			<Filters className={style.filters} />

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
					<EmptyMessage text="There is no series" className={style.empty_message} />
				)}
			</div>
		</main>
	);
};

export default MoviesListContainer;
