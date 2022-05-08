import React, { createContext, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import * as moviesActions from "actions/movies.actions";
import * as moviesApi from "api/movies.api";

export const MoviesListContext = createContext(null);

const MoviesListProvider = (props) => {
	const {
		children,
	} = props;

	const dispatch = useDispatch();

	/**
	 * Movies list showed on page.
	 * Concat array by pagination requests.
	 * @type {string[]}
	 */
	const [ids, setIds] = useState([]);

	/**
	 * is first data fetch done
	 * @type {boolean}
	 */
	const [isFetchComplete, setIsFetchComplete] = useState(false);

	/**
	 * is any data request in progress
	 * @type {boolean}
	 */
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	/**
	 * Error if request failed
	 * @property {string}
	 */
	const [error, setError] = useState("");

	/**
	 * Sorting movies by
	 * @property {string}
	 */
	const [sort, setSort] = useState("recommended");

	/**
	 * Filtering movies by genre
	 * @property {string}
	 */
	const [genres, setGenres] = useState([]);

	const firstLoadMovies = (data) => {
		if (isFetchComplete) {
			setIsFetchComplete(false);
		}

		if (!isRequestProcess) {
			setIsRequestProcess(true);
		}

		return moviesApi.getMoviesList(data)
			.then(({ movies }) => {
				dispatch(moviesActions.loadMovies(movies));

				const ids = movies.map((item) => item._id);
				setIds(ids);

				setIsRequestProcess(false);
				setIsFetchComplete(true);
			})

			.catch((error) => {
				console.log(error);

				if (error.message) {
					setError(error.message);
				}
			});
	};

	const filterMoviesByGenre = (genre) => {
		let newSelectedGenres = [];

		const isGenreSelected = genres.indexOf(genre) !== -1;

		if (genre && isGenreSelected) {
			newSelectedGenres = genres.filter((item) => item !== genre);
		}

		if (genre && !isGenreSelected) {
			newSelectedGenres = [...genres, genre];
		}

		setGenres(newSelectedGenres);

		firstLoadMovies({
			sort,
			genres: newSelectedGenres,
		});
	};

	const sortMovies = (sorting = "recommended") => {
		setSort(sorting);

		firstLoadMovies({
			sort: sorting,
			genres,
		});
	};

	const value = useMemo(() => ({
		state: {
			ids,
			isFetchComplete,
			isRequestProcess,
			error,
			sort,
			genres,
		},

		actions: {
			sortMovies,
			filterMoviesByGenre,
		},
	}), [
		ids,
		isFetchComplete,
		isRequestProcess,
		error,
		sort,
		genres.length,
	]);

	React.useEffect(() => {
		if (!isFetchComplete && !isRequestProcess) {
			firstLoadMovies();
		}
	}, []);

	return (
		<MoviesListContext.Provider value={value}>
			{children}
		</MoviesListContext.Provider>
	);
};

MoviesListProvider.propTypes = {
	children: PropTypes.any.isRequired,
};

export default MoviesListProvider;
