import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useQuery from "hooks/useQuery";
import style from "./style.css";

export const queryParam = "search";

const SearchOverlay = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const query = useQuery();

	const closeOverlay = () => {
		query.delete(queryParam);
		navigate(`${location.pathname}${query.toString()}`);
	};

	return (
		<div className={style.search_overlay}>
			<button
				type="button"
				onClick={closeOverlay}
				className={style.close_button}
			>
				close
			</button>
		</div>
	);
};

export default SearchOverlay;
