import React, { Fragment } from "react";
import Button from "components/BasicButton";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Navigation = () => {
	return (
		<Fragment>
			<div className={style.information}>
				<div className={style.profile_section}>
					<div className={style.avatar} />

					<div className={style.user_details}>
						<h3 className={style.name}>Yurii Korbat</h3>

						<span className={style.mail}>romahochetvtro@gmail.com</span>

						<Button
							theme="accent"
							appearance="fill"
							text="Edit Profile"
							className={style.edit_profile}
						/>
					</div>
				</div>
			</div>

			<div className={style.navigation_block}>
				<div className="container">
					<nav className={style.navigation}>
						<NavLink to="/movies/details/queens-gambit/" className={cx("link_button", "_is-active")}>Watch Later</NavLink>
						<NavLink to="/movies/details/queens-gambit/" className={style.link_button}>Best 2022</NavLink>
						<NavLink to="/movies/details/queens-gambit/" className={style.link_button}>TV Series</NavLink>
						<NavLink to="/movies/details/queens-gambit/" className={style.link_button}>Collections</NavLink>
					</nav>
				</div>
			</div>
		</Fragment>
	);
};

export default Navigation;
