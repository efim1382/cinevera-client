import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./style.css";

const backgroundOpacityFrom = 0.5;
const backgroundOpacityTo = 0.93;
const backgroundOpacityRange = backgroundOpacityFrom - backgroundOpacityTo;

const changeBackgroundOpacity = (event) => {
	const fullOpacityFrom = document.body.clientHeight / 2;
	const pageElement = document.getElementById("film-details");
	let percentScroll = event.target.scrollTop / fullOpacityFrom * 100;

	if (percentScroll > 100) {
		percentScroll = 100;
	}

	const currentOpacity = backgroundOpacityFrom - ((percentScroll * backgroundOpacityRange) / 100);
	pageElement.style.setProperty("--background-opacity", currentOpacity);
};

const FilmDetails = () => {
	const onScroll = (event) => {
		changeBackgroundOpacity(event);
	};

	useEffect(() => {
		document.body.addEventListener("scroll", onScroll, true);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div id="film-details" className={style.film_details}>
			<header className={style.header}>
				<div className="container">
					<NavLink to="/" className={style.logo}>Cinevera</NavLink>
				</div>
			</header>

			<div className={style.content}>
				<section className={style.description}>
					<div className="container">
						<h1 className={style.title}>law Abiding<br />Citizen</h1>

						<div className={style.additional_information}>
							<span className={style.match}>98% Match</span>
							<span className={style.year}>2009</span>
							<span className={style.age_limit}>18+</span>
						</div>

						<button className={style.play_button}>Resume</button>
					</div>
				</section>

				<section className={style.overview}>
					<div className="container">
						<div className={style.section}>
							<h2 className={style.subtitle}>Overview</h2>

							<p className={style.text}>
								It stars Gerard Butler and Jamie Foxx and takes place in Philadelphia,
								telling the story of a man driven to seek justice while targeting
								not only his family's killer but also those who have supported
								a corrupt criminal justice system,
								intending to assassinate anyone supporting the system.
							</p>
						</div>

						<div className={style.genres}>
							<h2 className={style.subtitle}>Genres</h2>

							<NavLink to="/" className={style.item}>Thriller</NavLink>
							<NavLink to="/" className={style.item}>Americal Films</NavLink>
						</div>
					</div>
				</section>

				<section className={style.videos}>

				</section>

				<section className={style.photos}>

				</section>

				<section className={style.cast}>
					<div className="container">
						<h2 className={style.subtitle}>Cast</h2>

						<div className={style.cast_list}>
							{[1, 2, 3].map((i) => (
								<div key={i} className={style.actor}>
									<div className={style.avatar} />

									<div className={style.actor_data}>
										<p className={style.name}>Gerrard Butler</p>
										<p className={style.character}>Gerrard Butler</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className={style.popular}>

				</section>
			</div>
		</div>
	);
};

export default FilmDetails;
