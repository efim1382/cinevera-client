import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useQuery from "hooks/useQuery";
import Icon from "components/Icon";
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
				<Icon name="close" />
			</button>

			<div className={style.main_block}>
				<h2>Search</h2>

				<div className={style.input_container}>
					<input
						type="text"
						placeholder="Deadpool, Shot Caller..."
						className={style.input_section}
					/>
					<Icon name="search" />
				</div>

				<section className={style.movies_list}>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>
							Inglourious Basterds Basterds Basterds
						</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Django unchained</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Basterds Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>

					<div className={style.movie}>
						<p className={style.name}>Inglourious Basterds</p>
						<span className={style.year}>2017</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default SearchOverlay;
