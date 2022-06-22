import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SeasonsContext } from "@panel/containers/Series/store/Seasons.store";

export const useSeasonsData = () => {
	const { state } = useContext(SeasonsContext);
	const { data, isRequestProcess, isFetchComplete, error } = state;

	if (isRequestProcess || !isFetchComplete || error) {
		throw Promise.resolve();
	}

	return data;
};

export const useSeasonDetailsData = () => {
	const { seasonNumber } = useParams();
	const seasons = useSeasonsData();
	const details = seasons.find((item) => `${item.number}` === seasonNumber);

	if (!details) {
		throw Promise.resolve();
	}

	return details;
};

export const useEpisodeData = () => {
	const { episodeNumber } = useParams();
	const { episodes } = useSeasonDetailsData();
	const details = episodes.find((item) => `${item.number}` === episodeNumber);

	if (!details) {
		throw Promise.resolve();
	}

	return details;
};
