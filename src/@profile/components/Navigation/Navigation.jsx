import React, { Fragment } from "react";
import Icon from "components/Icon";
import { NavLink } from "react-router-dom";
import MovieCard from "components/MovieCard";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Navigation = () => {
	return (
		<Fragment>
			<div className={style.profile_page}>
				<div className={style.sidebar}>
					<div className={style.avatar} />

					<span className={style.description}>
						I have three younger tralala lala lala
						and this one i dont know what is this written
					</span>
					<div className={style.social}>
						<button className={style.social_button}>
							<Icon name="instagram" />
						</button>

						<button className={style.social_button}>
							<Icon name="facebook" />
						</button>

						<button className={style.social_button}>
							<Icon name="telegram" />
						</button>

						<button className={style.social_button}>
							<Icon name="twitter" />
						</button>
					</div>

					<nav className={style.navigation}>
						<NavLink to="/movies/details/queens-gambit/" className={cx("link_button", "_is-active")}>
							<Icon name="star_border" />
							<span>Watch Later</span>
						</NavLink>
						<NavLink to="/movies/details/queens-gambit/" className={style.link_button}>
							<span>Best 2022</span>
							<Icon name="star_border" />
						</NavLink>
						<NavLink to="/movies/details/queens-gambit/" className={style.link_button}>
							<span>TV Series</span>
							<Icon name="star_border" />
						</NavLink>
						<NavLink to="/movies/details/queens-gambit/" className={style.link_button}>
							<span>Collections</span>
							<Icon name="star_border" />
						</NavLink>
					</nav>
				</div>

				<div className={style.content}>
					<div className="container">
						<div className={style.movies_list}>
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
							<MovieCard id={3} className={style.card} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navigation;
