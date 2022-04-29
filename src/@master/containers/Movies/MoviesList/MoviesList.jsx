import React from "react";
import Icon from "components/Icon";
import { continueItems, popularItems } from "../../Home/Home";
import style from "./style.css";

const images = [...continueItems, ...popularItems, ...continueItems, ...popularItems].map((item) => item.image);

const MoviesList = () => {
	return (
		<div className={style.movies}>
			<div className={style.main_block}>
				<div className="container">
					<h1 className={style.title}>Movies</h1>

					<div className={style.categories}>
						<button className={style.item}>Drama</button>
						<button className={style.item}>Adventure</button>
						<button className={style.item}>Comedy</button>
						<button className={style.item}>Thriller</button>
						<button className={style.item}>Documentary</button>
						<button className={style.item}>Criminal</button>
						<button className={style.item}>Animation</button>
						<button className={style.item}>Action</button>
						<button className={style.item}>Detective</button>
						<button className={style.item}>Action</button>
						<button className={style.item}>Romantic</button>
						<button className={style.item}>Historical</button>
					</div>

					<div className={style.sorting}>
						<p className={style.caption}>Sort By</p>
						<div className={style.dropdown}>Year</div>

						<div className={style.rating}>
							<Icon name="star" />

							<div className={style.slider}>
								<div className={style.circle} />
							</div>

							<p className={style.rating_text}>5.0</p>
						</div>
					</div>
				</div>
			</div>

			<section className={style.movies_list}>
				<div className="container">
					{images.map((item, index) => (
						<div key={index} className={style.movie} style={{ backgroundImage: item }} />
					))}
				</div>
			</section>
		</div>
	);
};

export default MoviesList;
