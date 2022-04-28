import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "components/BasicButton";
import Icon from "components/Icon";
import style from "./style.css";

const backgroundOpacityFrom = 0.4;
const backgroundOpacityTo = 0.9;
const backgroundOpacityRange = backgroundOpacityFrom - backgroundOpacityTo;
const fullOpacityFrom = 400;

const changeBackgroundOpacity = () => {
	const pageElement = document.getElementById("film-details");

	if (!pageElement) {
		return;
	}

	let percentScroll = window.scrollY / fullOpacityFrom * 100;

	if (percentScroll > 100) {
		percentScroll = 100;
	}

	const currentOpacity = backgroundOpacityFrom - ((percentScroll * backgroundOpacityRange) / 100);

	if (pageElement.style.getPropertyValue("--background-opacity") !== `${currentOpacity}`) {
		pageElement.style.setProperty("--background-opacity", currentOpacity);
	}
};

const FilmDetails = () => {
	const onScroll = (event) => {
		changeBackgroundOpacity(event);
	};

	useEffect(() => {
		document.addEventListener("scroll", onScroll, true);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div id="film-details" className={style.film_details}>
			<section className={style.description}>
				<div className="container">
					<h1 className={style.title}>law Abiding<br />Citizen</h1>

					<div className={style.additional_information}>
						<span className={style.match}>98% Match</span>
						<span className={style.year}>2009</span>
						<span className={style.age_limit}>18+</span>
					</div>

					<Button
						text="Resume"
						className={style.play_button}
					/>
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
				<div className="container">
					<h2 className={style.subtitle}>Trailer</h2>

					<div className={style.trailer_container}>

						<button type="button" className={style.play_button}>
							<div className={style.trailer}>
								<div className={style.trailer_details}>
									<Icon name="play" />

									<p className={style.trailer_duration}>
										Trailer
										<span className={style.duration}>0:55</span>
									</p>
								</div>
							</div>
						</button>

						<button type="button" className={style.play_button}>
							<div className={style.trailer}>
								<div className={style.trailer_details}>
									<Icon name="play" />

									<p className={style.trailer_duration}>
										Trailer
										<span className={style.duration}>0:55</span>
									</p>
								</div>
							</div>
						</button>

						<button type="button" className={style.play_button}>
							<div className={style.trailer}>
								<div className={style.trailer_details}>
									<Icon name="play" />

									<p className={style.trailer_duration}>
										Trailer
										<span className={style.duration}>0:55</span>
									</p>
								</div>
							</div>
						</button>
					</div>
				</div>
			</section>

			<section className={style.photos}>
				<div className="container">
					<h2 className={style.subtitle}>Photos</h2>

					<div className={style.photos_container}>
						<div className={style.actor_photos} />
						<div className={style.actor_photos} />
						<div className={style.actor_photos} />
					</div>
				</div>
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
				<div className="container">
					<h2 className={style.subtitle}>Popular</h2>

					<div className={style.popular_container}>
						<div className={style.film_page} />
						<div className={style.film_page} />
						<div className={style.film_page} />
						<div className={style.film_page} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default FilmDetails;
