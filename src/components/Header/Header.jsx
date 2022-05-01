import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import Icon from "components/Icon";
import MobileOverlay from "./MobileOverlay";
import useMedia from "hooks/useMedia";
import style from "./style.css";

const cx = classnames.bind(style);

const changingOpacityClassFromTop = 50;

const changeHeaderOpacity = () => {
	const headerElement = document.getElementById("header");

	if (!headerElement) {
		return;
	}

	const isOpacityClassContains = headerElement.classList.contains("_is-filled");

	if (window.scrollY >= changingOpacityClassFromTop && !isOpacityClassContains) {
		headerElement.classList.add("_is-filled");
	}

	if (window.scrollY < changingOpacityClassFromTop && isOpacityClassContains) {
		headerElement.classList.remove("_is-filled");
	}
};

const Header = ({ isTransparent, className }) => {
	const isMobileView = useMedia("(max-width: 1024px)");
	const [isMobileOverlayStateShown, setMobileOverlayStateShown] = useState(false);

	const isMobileOverlayShown = isMobileView && isMobileOverlayStateShown;

	const toggleMobileOverlayShown = () => setMobileOverlayStateShown(!isMobileOverlayStateShown);

	const onScroll = (event) => {
		if (isTransparent) {
			changeHeaderOpacity(event);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", onScroll, true);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<header
			id="header"
			className={cx("header", className, { "_is-filled": !isTransparent })}
		>
			<div className="container">
				<nav className={style.navigation}>
					<NavLink
						to="/"
						className={style.link}
					>
						Home
					</NavLink>

					<NavLink
						to="/movies/"
						className={style.link}
					>
						Movies
					</NavLink>

					<NavLink
						to="/series/"
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

				<button className={style.mobile_menu} onClick={toggleMobileOverlayShown}>
					<Icon name="menu" />
				</button>
			</div>

			{isMobileOverlayShown && (
				<MobileOverlay />
			)}
		</header>
	);
};

Header.defaultProps = {
	isTransparent: true,
};

Header.propTypes = {
	isTransparent: PropTypes.bool,
	className: PropTypes.string,
};

export default Header;
