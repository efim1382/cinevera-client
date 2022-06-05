import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import style from "./style.css";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.media}>
				<NavLink to="/" className={style.logo}>cinevera</NavLink>

				<div className={style.description}>
					<span>
						Everything is collected here.
						And this "everything" is done for you in the best possible way.
					</span>
				</div>

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
			</div>

			<div className={style.link_container}>
				<div className={style.link_column}>
					<span>Company</span>
					<NavLink to="/">About</NavLink>
					<NavLink to="/">Careers</NavLink>
					<NavLink to="/">Vacancies</NavLink>
					<NavLink to="/">Support Center</NavLink>
				</div>

				<div className={style.link_column}>
					<span>Rules</span>
					<NavLink to="/">Legal Status</NavLink>
					<NavLink to="/">Privacy Policy</NavLink>
					<NavLink to="/">Terms of use</NavLink>
					<NavLink to="/">Cookie Policy</NavLink>
				</div>

				<div className={style.link_column}>
					<span>Media</span>
					<NavLink to="/">Audio Description</NavLink>
					<NavLink to="/">Media Center</NavLink>
					<NavLink to="/">Audio and Subtitles</NavLink>
				</div>

				<div className={style.link_column}>
					<span>Suggestions</span>
					<NavLink to="/">Gift Certificates</NavLink>
					<NavLink to="/">For Investors</NavLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;