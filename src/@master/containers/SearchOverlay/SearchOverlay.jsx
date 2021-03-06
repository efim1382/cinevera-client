import React, { useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import useQuery from "hooks/useQuery";
import Icon from "components/Icon";
import LoadingRing from "components/LoadingRing";
import Overlay from "components/Overlay";
import * as moviesApi from "api/movies.api";
import style from "./style.css";

export const queryParam = "search";

const debounceTimeout = 500;
let debounceTimer;

const debounce = (callback, value) => {
	window.clearTimeout(debounceTimer);

	debounceTimer = setTimeout(() => {
		callback(value);
	}, debounceTimeout);
};

const SearchOverlay = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const query = useQuery();
	const [movies, setMovies] = useState([]);
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	const isMoviesExist = movies.length > 0;

	const closeOverlay = () => {
		query.delete(queryParam);
		navigate(`${location.pathname}${query.toString()}`);
	};

	const search = (query) => {
		setIsRequestProcess(true);

		moviesApi.search({ query, limit: 10 })
			.then(({ result }) => {
				setMovies(result);
				setIsRequestProcess(false);
			})

			.catch((error) => {
				console.log(error);
				setIsRequestProcess(false);
			});
	};

	const resetSearch = () => {
		if (isRequestProcess) {
			setIsRequestProcess(false);
		}

		setMovies([]);
	};

	const onInput = (event) => {
		if (!event.target.value) {
			return resetSearch();
		}

		if (!isRequestProcess) {
			setIsRequestProcess(true);
		}

		debounce(search, event.target.value);
	};

	return (
		<Overlay onClose={closeOverlay}>
			<div className={style.main_block}>
				<h2>Search</h2>

				<div className={style.input_container}>
					<input
						type="text"
						placeholder="Deadpool, Shot Caller..."
						onInput={onInput}
						className={style.search_input}
					/>

					<Icon name="search" />
					<LoadingRing isShown={isRequestProcess} className={style.loading} />
				</div>

				<section className={style.movies_list}>
					{isMoviesExist && (
						movies.map((item) => {
							const year = item.objectType === "movie"
								? item.year[0]
								: `${item.year[0]} - ${item.year[1]}`;

							const link = item.objectType === "movie"
								? `/movies/details/${item._id}/`
								: `/series/details/${item._id}/season/1/`;

							return (
								<NavLink key={item._id} to={link} className={style.movie}>
									<p className={style.name}>{item.title}</p>
									<p className={style.year}>{year}</p>
								</NavLink>
							);
						})
					)}
				</section>
			</div>
		</Overlay>
	);
};

export default SearchOverlay;
