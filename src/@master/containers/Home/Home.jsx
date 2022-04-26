import React from "react";
import Header from "@master/containers/FilmDetails/Header";
import style from "./style.css";

const Home = () => {
	return (
		<div className={style.home}>
			<Header />

			<section className={style.main_block}>
				<div className="container">
					<h1 className={style.title}>The Queen's<br />Gambit</h1>

					<p className={style.description}>
						Orphaned at the tender age of nine,
						<br />
						prodigious introvert Beth Harmon discovers
						<br />
						and masters the game of chess in 1960s USA.
						<br />
						But child stardom comes at a price.
					</p>

					<div className={style.actions}>
						<button className={style.watch}>Watch</button>
						<button className={style.trailer}>Play Trailer</button>
					</div>
				</div>
			</section>

			<section className={style.continue}>
				<div className="container">
					<h2 className={style.subtitle}>Continue Watching</h2>

					<div className={style.continue_list}>
						<div className={style.continue_item} />
						<div className={style.shot_caller} />
						<div className={style.peaky_blinders} />
						<div className={style.fight_club} />
						<div className={style.fury} />
						<div className={style.continue_item} />
						<div className={style.continue_item} />
					</div>
				</div>
			</section>

			<section className={style.popular}>
				<div className="container">
					<h2 className={style.subtitle}>Popular Now</h2>

					<div className={style.popular_list}>
						<div className={style.gentlemen} />
						<div className={style.django} />
						<div className={style.inglourious_basterds} />
						<div className={style.john_wick} />
						<div className={style.popular_item} />
						<div className={style.popular_item} />
						<div className={style.popular_item} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
