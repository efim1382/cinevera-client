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

	const [ids, setIds] = useState([]);
	const [isFetchComplete, setIsFetchComplete] = useState(false);
	const [isRequestProcess, setIsRequestProcess] = useState(false);
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
			moviesApi.getMoviesList()
				.then(({ movies }) => {
					dispatch(moviesActions.loadMovies(movies));
					const ids = movies.map((item) => item._id);
					setIds(ids);
				})

				.catch((error) => {
					console.log(error);
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
