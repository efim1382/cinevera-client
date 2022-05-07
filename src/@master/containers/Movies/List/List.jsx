import React, { useState, useContext } from "react";
import Icon from "components/Icon";
import MovieCard from "components/MovieCard";
import EmptyMessage from "components/EmptyMessage";
import Dropdown from "./Dropdown";
import { genres, getGenreByCode } from "config/genres";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const itemsPerPage = 30;
const defaultEmptyMovies = [...Array(itemsPerPage).keys()];
import { MoviesListContext } from "./MoviesListProvider";

const MoviesListContainer = () => {
	const {
		ids,
		isFetchComplete,
		isRequestProcess,
	} = useContext(MoviesListContext);

	const [selectedGenres, setSelectedGenres] = useState([]);

	const filteredGenres = genres.filter((item) => selectedGenres.indexOf(item.value) === -1);

	const moviesIds = !isFetchComplete && isRequestProcess
		? defaultEmptyMovies
		: ids;

	const isEmptyMessageShown = isFetchComplete && moviesIds.length === 0;
	const isMoviesExist = !isEmptyMessageShown && moviesIds.length > 0;

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

					<Dropdown className={style.dropdown}>
						{({ onClose }) => (
							<div className={style.dropdown_content}>
								{selectedGenres.map((value) => {
									const label = getGenreByCode(value).label;

									const onClick = () => {
										setSelectedGenres(
											[...selectedGenres].filter((item) => item !== value),
										);

										onClose();
									};

									return (
										<button
											key={value}
											type="button"
											className={cx("dropdown_category", "_is-selected")}
											onClick={onClick}
										>
											<span className={style.caption}>{label}</span>
											<Icon name="mark" className={style.mark} />
											<Icon name="close" className={style.close} />
										</button>
									);
								})}

								{filteredGenres.map((item) => {
									const onClick = () => {
										setSelectedGenres([...selectedGenres, item.value]);
										onClose();
									};

									return (
										<button
											key={item.value}
											type="button"
											className={style.dropdown_category}
											onClick={onClick}
										>
											<span className={style.caption}>{item.label}</span>
											<Icon name="mark" className={style.mark} />
										</button>
									);
								})}
							</div>
						)}
					</Dropdown>

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
