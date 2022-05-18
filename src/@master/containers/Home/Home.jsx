import React from "react";
import { NavLink } from "react-router-dom";
import Button from "components/BasicButton";
import PopularList from "@master/components/PopularList";
import EpisodesList from "@master/components/EpisodesList";

import style from "./style.css";

const Home = () => {
	return (
		<main className={style.home}>
			<section className={style.main_block}>
				<div className="container">
					<h1 className={style.title}>The Queen's<br />Gambit</h1>

					<p className={style.description}>
						Orphaned at the tender age of nine,
						prodigious introvert Beth Harmon discovers
						and masters the game of chess in 1960s USA.
						But child stardom comes at a price.
					</p>

					<div className={style.actions}>
						<NavLink to="/movies/details/queens-gambit/" className={style.link}>
							<Button text="Watch" icon="play_outline" className={style.link_button} />
						</NavLink>

						<Button
							theme="primary"
							appearance="outline"
							text="Play Trailer"
							icon="play_outline"
							className={style.button}
						/>
					</div>
				</div>
			</section>

			<EpisodesList
				title="Continue watching"
				items={episodesItems}
				className={style.continue}
			/>

			<PopularList
				title="Popular now"
				type="series"
				className={style.movies_row_section}
			/>

			<PopularList
				title="Best comedy movies"
				className={style.movies_row_section}
			/>

			<section className={style.premiere}>
				<div className="container">
					<h3>Recommended to Watch</h3>

					<div className={style.film_properties}>
						<div className={style.information}>
							<span className={style.film_year}>2016</span>
							<span className={style.duration}>108 min</span>
							<span className={style.genre}>Comedy</span>
						</div>

						<p className={style.name_film}>Deadpool</p>

						<p className={style.info}>
							A former Special Forces operative
							turned mercenary is subjected
							to arogue experiment that leaves
							him with accelerated healing powers,
							adotping the alter ego Deadpool.
							A former Special Forces operative
							turned mercenary is subjected
							to arogue experiment that leaves
							him with accelerated healing powers,
							adotping the alter ego Deadpool.
						</p>

						<Button text="Watch" icon="play_outline" className={style.link_button} />
					</div>
				</div>
			</section>

			<PopularList
				title="Best of 2021"
				className={style.movies_row_section}
			/>

			<PopularList
				title="Popular thrillers"
				type="movie"
				className={style.movies_row_section}
			/>
		</main>
	);
};

export const episodesItems = [
	{
		_id: "1",
		title: "Sadsdsada",
		posterUrl: "https://m.media-amazon.com/images/M/MV5BOTYwZDNlMDMtZWRkNC00NzNkLTk2ZDMtNGQ1MmEwNzAwZGZhXkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_.jpg",
	},

	{
		_id: "2",
		title: "Sadsdsada",
		posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQyMjMzMDIxOV5BMl5BanBnXkFtZTcwODU2ODg5NA@@._V1_.jpg",
	},

	{
		_id: "3",
		title: "Sadsdsada",
		posterUrl: "https://m.media-amazon.com/images/M/MV5BMmUzN2FiYjItZGUyMy00ZjNlLWFjOWYtZDI4Yzk3YzQ4OGRmXkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_.jpg",
	},

	{
		_id: "4",
		title: "Sadsdsada",
		posterUrl: "https://m.media-amazon.com/images/M/MV5BMmUzN2FiYjItZGUyMy00ZjNlLWFjOWYtZDI4Yzk3YzQ4OGRmXkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_.jpg",
	},

	{
		_id: "5",
		title: "Sadsdsada",
		posterUrl: "https://m.media-amazon.com/images/M/MV5BMmUzN2FiYjItZGUyMy00ZjNlLWFjOWYtZDI4Yzk3YzQ4OGRmXkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_.jpg",
	},
];

export default Home;
