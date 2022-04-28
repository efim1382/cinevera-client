import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import BasicButton from "components/BasicButton";
import style from "./style.css";

const NotFound = () => {
	return (
		<main className={style.not_found}>
			<div className="container">
				<section className={style.section}>
					<h1>404</h1>
					<p className={style.description}>Sorry, the page you are<br />looking for could be found</p>

					<NavLink to="/" className={style.link}>
						<BasicButton
							theme="primary"
							text="Go Home"
						/>
					</NavLink>
				</section>

				<div className={style.illustration}>
					<Icon name="question" />
				</div>
			</div>
		</main>
	);
};

export default NotFound;
