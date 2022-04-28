import React from "react";
import { NavLink } from "react-router-dom";
import Header from "@master/containers/FilmDetails/Header";
import style from "./style.css";
import Icon from "components/Icon";

const Home = () => {
	return (
		<div className={style.home}>
			<Header isTransparent />

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
						<NavLink to="/film/" className={style.watch}>Watch</NavLink>
						<button className={style.trailer}>Play Trailer</button>
					</div>
				</div>
			</section>

			<section className={style.continue}>
				<div className="container">
					<h2 className={style.subtitle}>Continue Watching</h2>

					<div className={style.continue_list}>
						<div className={style.continue_items}>
							<button className={style.play_button}>
								<Icon name="play" />
							</button>

							<div className={style.description}>
								<p className={style.name_film}>Zavod</p>
								<span className={style.film_year}>2018</span>

								<div className= {style.rewind_bar}>
									<p className={style.time}>42:31</p>

									<div className={style.rewind}>
										<div className={style.controler} />
									</div>

									<p className={style.time_end}>1:32:04</p>
								</div>
							</div>
						</div>

						<div className={style.continue_items}>
							<button className={style.play_button}>
								<Icon name="play" />
							</button>

							<div className={style.description}>
								<p className={style.name_film}>Zavod</p>
								<span className={style.film_year}>2018</span>

								<div className= {style.rewind_bar}>
									<p className={style.time}>42:31</p>

									<div className={style.rewind}>
										<div className={style.controler} />
									</div>

									<p className={style.time_end}>1:32:04</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={style.popular}>
				<div className="container">
					<h2 className={style.subtitle}>Popular Now</h2>

					<div className={style.popular_list}>
						{popularItems.map((item) => (
							<div
								key={item._id}
								className={style.popular_item}
								style={{ backgroundImage: item.image }}
							/>
						))}
					</div>
				</div>
			</section>

			<section className={style.best_films}>
				<div className="container">
					<h2 className={style.subtitle}>Best of 2021</h2>

					<div className={style.best_films_list}>
						{continueItems.map((item) => (
							<div
								key={item._id}
								className={style.best_films_item}
								style={{ backgroundImage: item.image }}
							/>
						))}
					</div>
				</div>
			</section>

			<section className={style.premiere}>
				<div className="container">
					<h2 className={style.subtitle}>Premiere</h2>
					<div className={style.premiere_block}>
						<div className={style.description}>
							<p className={style.title}>Featured Movies</p>

							<div className={style.information}>
								<span className={style.duration}>108 min</span>
								<span className={style.genre}>Comedy</span>
								<span className={style.film_year}>2016</span>
							</div>
							<p className={style.name_film}>Deadpool</p>

							<p className={style.info}>
								A former Special Forces operative
								turned mercenary is subjected
								to arogue experiment that leaves
								him with accelerated healing powers,
								adotping the alter ego Deadpool.
							</p>
						</div>

						<button className={style.button_info}>More info
							<Icon name="east" />
						</button>

						<button className={style.play_watch_button}>
							<Icon name="play" />
							<span className={style.button_text}>Watch now</span>
						</button>
					</div>
				</div>
			</section>

			<section className={style.popular}>
				<div className="container">
					<h2 className={style.subtitle}>Popular Now</h2>

					<div className={style.popular_list}>
						{popularItems.map((item) => (
							<div
								key={item._id}
								className={style.popular_item}
								style={{ backgroundImage: item.image }}
							/>
						))}
					</div>
				</div>
			</section>

			<section className={style.best_films}>
				<div className="container">
					<h2 className={style.subtitle}>Best of 2021</h2>

					<div className={style.best_films_list}>
						{continueItems.map((item) => (
							<div
								key={item._id}
								className={style.best_films_item}
								style={{ backgroundImage: item.image }}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;

export const continueItems = [
	{
		_id: 1,
		image: "url(https://wallpapershome.ru/images/pages/pic_v/12849.jpg)",
	},

	{
		_id: 2,
		image: "url(https://filmix.ac/uploads/frames/118698/f247290-vystrel-v-pustotu_2017_original.jpg)",
	},

	{
		_id: 3,
		image: "url(https://cdn.oboi7.com/content/images/e3/ee/e3ee9a3e26ec84cae113de17a43691af853ab0fe.jpg)",
	},

	{
		_id: 4,
		image: "url(https://p4.wallpaperbetter.com/wallpaper/1024/392/1003/movie-fury-wallpaper-thumb.jpg)",
	},

	{
		_id: 5,
		image: "url(https://wallpapershome.ru/images/pages/pic_v/12849.jpg)",
	},

	{
		_id: 6,
		image: "url(https://wallpapershome.ru/images/pages/pic_v/12849.jpg)",
	},

	{
		_id: 7,
		image: "url(https://cdn.oboi7.com/content/images/e3/ee/e3ee9a3e26ec84cae113de17a43691af853ab0fe.jpg)",
	},

	{
		_id: 8,
		image: "url(https://p4.wallpaperbetter.com/wallpaper/1024/392/1003/movie-fury-wallpaper-thumb.jpg)",
	},
];

export const popularItems = [
	{
		_id: 1,
		image: "url(https://images.kinorium.com/movie/shot/381127/w1500_1263015.jpg)",
	},

	{
		_id: 2,
		image: "url(https://i.pinimg.com/736x/48/f6/f2/48f6f2113680380e5edb2d378a5f3eac.jpg)",
	},

	{
		_id: 3,
		image: "url(https://www.kinogallery.com/img/wallpaper/kinogallery.com_Inglourious-Basterds-17_1600.jpg)",
	},

	{
		_id: 4,
		image: "url(https://pbs.twimg.com/media/D9rZWPCWsAEeDg-.jpg)",
	},

	{
		_id: 5,
		image: "url(https://i.pinimg.com/736x/79/2a/f2/792af24e261c83b9363b83c21a190474.jpg)",
	},

	{
		_id: 6,
		image: "url(https://pbs.twimg.com/media/D9rZWPCWsAEeDg-.jpg)",
	},

	{
		_id: 7,
		image: "url(https://i.pinimg.com/736x/48/f6/f2/48f6f2113680380e5edb2d378a5f3eac.jpg)",
	},

	{
		_id: 8,
		image: "url(https://images.kinorium.com/movie/shot/381127/w1500_1263015.jpg)",
	},
];
