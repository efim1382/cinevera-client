import React, { createContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import * as moviesApi from "@panel/api/movies.api";

export const SeriesDetailsContext = createContext(null);

const SeriesDetailsProvider = (props) => {
	const {
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
			setData,
		},
	}), [
		JSON.stringify(data),
		isFetchComplete,
		isRequestProcess,
		error,
	]);

	React.useEffect(() => {
		if (!isFetchComplete && !isRequestProcess) {
			setIsRequestProcess(true);

			moviesApi.getSeriesDetails(id)
				.then(({ series }) => {
					setData(series);
					setIsFetchComplete(true);
					setIsRequestProcess(false);
				})

				.catch((error) => {
					setIsRequestProcess(false);
					setError(error);
				});
		}
	}, []);

	return (
		<SeriesDetailsContext.Provider value={value}>
			{children}
		</SeriesDetailsContext.Provider>
	);
};

SeriesDetailsProvider.propTypes = {
	children: PropTypes.any.isRequired,
};

export default SeriesDetailsProvider;
