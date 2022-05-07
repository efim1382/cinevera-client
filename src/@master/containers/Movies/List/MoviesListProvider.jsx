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

	const value = useMemo(() => ({
		ids,
		isFetchComplete,
		isRequestProcess,
		error,
	}), [
		ids,
		isFetchComplete,
		isRequestProcess,
		error,
	]);

	React.useEffect(() => {
		if (!isFetchComplete && !isRequestProcess) {
			setIsRequestProcess(true);

			moviesApi.getMoviesList()
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
