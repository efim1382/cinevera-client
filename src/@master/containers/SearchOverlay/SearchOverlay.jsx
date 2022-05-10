import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import useQuery from "hooks/useQuery";
import Icon from "components/Icon";
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

	const isMoviesExist = movies.length > 0;

	const closeOverlay = () => {
		query.delete(queryParam);
		navigate(`${location.pathname}${query.toString()}`);
	};

	const search = (query) => {
		if (!query) {
			return setMovies([]);
		}

		moviesApi.search({ query, limit: 10 })
			.then(({ result }) => {
				setMovies(result);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const onKeyDown = (event) => {
		if (event.key === "Escape") {
			closeOverlay();
		}
	};

	const onInput = (event) => {
		debounce(search, event.target.value);
	};

	useEffect(() => {
		document.body.style.setProperty("overflow", "hidden");
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.removeProperty("overflow");
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<div className={style.search_overlay}>
			<button
				type="button"
				onClick={closeOverlay}
				className={style.close_button}
			>
				<Icon name="close" />
			</button>

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
				</div>

				<section className={style.movies_list}>
					{isMoviesExist && (
						movies.map((item) => (
							<NavLink key={item._id} to={`/movies/details/${item._id}/`} className={style.movie}>
								<p className={style.name}>{item.name}</p>
								<p className={style.year}>{item.year}</p>
							</NavLink>
						))
					)}
				</section>
			</div>
		</div>
	);
};

export default SearchOverlay;
