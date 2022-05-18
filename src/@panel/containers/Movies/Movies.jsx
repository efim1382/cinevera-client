import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import style from "./style.css";

const Movies = () => {
	return (
		<main className={style.movies}>
			<div className={style.sidebar}>
				<div className={style.logo_container}>
					<NavLink to="/" className={style.logo}>cinevera</NavLink>
				</div>

				<div className={style.section_menu}>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
					<NavLink to="/" className={style.section_items}>Information</NavLink>
				</div>

				<div className={style.profile}>
					<div className={style.avatar} />

					<span className={style.name}>Yurii Korbat</span>

					<button className={style.profile_button}>
						<Icon name="expand_more" />
					</button>
				</div>
			</div>

			<div className={style.dashbord}>Menu</div>
		</main>
	);
};

export default Movies;
