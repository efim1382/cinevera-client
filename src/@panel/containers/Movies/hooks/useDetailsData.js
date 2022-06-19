import { useContext } from "react";
import { MovieDetailsContext } from "@panel/containers/Movies/store/MovieDetails.store";

export default () => {
	const { state } = useContext(MovieDetailsContext);
	const { data, isFetchComplete, error } = state;

	if (!isFetchComplete || error) {
		throw Promise.resolve();
	}

	return data;
};
