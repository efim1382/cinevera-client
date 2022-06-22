import React, { createContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import * as moviesApi from "api/movies.api";

export const ObjectDetailsContext = createContext(null);

const ObjectDetailsProvider = (props) => {
	const {
		type,
		children,
	} = props;

	const { id } = useParams();

	/**
	 * Movies details object
	 * @type object
	 */
	const [data, setData] = useState({});

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
		state: {
			data,
			isFetchComplete,
			isRequestProcess,
			error,
		},

		actions: {
		},
	}), [
		JSON.stringify(data),
		isFetchComplete,
		isRequestProcess,
		error,
	]);

	const loadDetails = () => {
		setIsRequestProcess(true);

		const request = type === "series"
			? moviesApi.getSeriesDetails
			: moviesApi.getMovieDetails;

		request(id)
			.then(({ [type]: result }) => {
				setData(result);
				setIsRequestProcess(false);

				if (!isFetchComplete) {
					setIsFetchComplete(true);
				}
			})

			.catch((error) => {
				setIsRequestProcess(false);
				setError(error);
			});
	};

	React.useEffect(() => {
		if (!isRequestProcess) {
			loadDetails();
		}
	}, [id]);

	return (
		<ObjectDetailsContext.Provider value={value}>
			{children}
		</ObjectDetailsContext.Provider>
	);
};

ObjectDetailsProvider.defaultProps = {
	type: "movie",
};

ObjectDetailsProvider.propTypes = {
	type: PropTypes.oneOf(["movie", "series"]),
	children: PropTypes.any.isRequired,
};

export default ObjectDetailsProvider;
