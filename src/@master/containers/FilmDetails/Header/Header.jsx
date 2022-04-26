import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const changingOpacityClassFromTop = 50;

const changeHeaderOpacity = (event) => {
	const headerElement = document.getElementById("header");
	const isOpacityClassContains = headerElement.classList.contains("_is-filled");

	if (event.target.scrollTop >= changingOpacityClassFromTop && !isOpacityClassContains) {
		headerElement.classList.add("_is-filled");
	}

	if (event.target.scrollTop < changingOpacityClassFromTop && isOpacityClassContains) {
		headerElement.classList.remove("_is-filled");
	}
};

const Header = ({ isTransparent, className }) => {
	const onScroll = (event) => {
		if (isTransparent) {
			changeHeaderOpacity(event);
		}
	};

	useEffect(() => {
		document.body.addEventListener("scroll", onScroll, true);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<header id="header" className={cx("header", className, { "_is-filled": !isTransparent })}>
			<div className="container">
				<nav className={style.navigation}>
					<NavLink
						to="/"
						className={style.link}
					>
						Home
					</NavLink>

					<NavLink
						to="/movies"
						className={style.link}
					>
						Movies
					</NavLink>

					<NavLink
						to="/series"
						className={style.link}
					>
						TV Shows
					</NavLink>
				</nav>

				<NavLink to="/" className={style.logo}>cinevera</NavLink>

				<div className={style.actions}>
					<button className={style.button}>
						<Icon name="search" />
					</button>

					<button className={style.button}>
						<Icon name="bell" />
					</button>

					<button className={style.button}>
						<div className={style.avatar} />
					</button>
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	isTransparent: false,
};

Header.propTypes = {
	isTransparent: PropTypes.bool,
	className: PropTypes.string,
};

export default Header;
