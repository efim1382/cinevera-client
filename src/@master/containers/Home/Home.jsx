import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "components/BasicButton";
import Icon from "components/Icon";
import MovieCard from "components/MovieCard";
import Swiper from "components/Swiper";
import { SwiperSlide } from "swiper/react";
import { getPopularMoviesList } from "api/movies.api";
import { loadMovies } from "actions/movies.actions";
import { moviesSliderBreakpoints } from "config/adaptability";

import style from "./style.css";

const Home = () => {
	const dispatch = useDispatch();
	const [moviesIds, setMoviesIds] = useState([]);

	useEffect(() => {
		getPopularMoviesList()
			.then(({ movies }) => {
				dispatch(loadMovies(movies));
				const ids = movies.map((item) => item._id);
				setMoviesIds(ids);
			});
	}, []);

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
							<Button text="Watch" icon="play" className={style.link_button} />
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

			<section className={style.continue}>
				<div className="container">
					<h3>Continue Watching</h3>

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

			<section className={style.movies_row_section}>
				<div className={style.subheader}>
					<div className="container">
						<h3>Popular now</h3>
					</div>
				</div>

				<div className={style.row_list}>
					<div className="container">
						<Swiper breakpoints={moviesSliderBreakpoints}>
							{moviesIds.map((item) => (
								<SwiperSlide key={item}>
									<MovieCard id={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

			<section className={style.movies_row_section}>
				<div className={style.subheader}>
					<div className="container">
						<h3>Best comedy movies</h3>
					</div>
				</div>

				<div className={style.row_list}>
					<div className="container">
						<Swiper breakpoints={moviesSliderBreakpoints}>
							{moviesIds.map((item) => (
								<SwiperSlide key={item}>
									<MovieCard id={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

			<section className={style.premiere}>
				<div className="container">
					<h3>Premiere</h3>
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

			<section className={style.movies_row_section}>
				<div className={style.subheader}>
					<div className="container">
						<h3>Best of 2021</h3>
					</div>
				</div>

				<div className={style.row_list}>
					<div className="container">
						<Swiper breakpoints={moviesSliderBreakpoints}>
							{moviesIds.map((item) => (
								<SwiperSlide key={item}>
									<MovieCard id={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

			<section className={style.movies_row_section}>
				<div className={style.subheader}>
					<div className="container">
						<h3>Popular thrillers</h3>
					</div>
				</div>

				<div className={style.row_list}>
					<div className="container">
						<Swiper breakpoints={moviesSliderBreakpoints}>
							{moviesIds.map((item) => (
								<SwiperSlide key={item}>
									<MovieCard id={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
