import { useContext } from "react";
import { ActorDetailsContext } from "@panel/containers/Actors/store/ActorDetails.store";

export default () => {
	const { state } = useContext(ActorDetailsContext);
	const { data, isFetchComplete, error } = state;

	if (!isFetchComplete || error) {
		throw Promise.resolve();
	}

	return data;
};
