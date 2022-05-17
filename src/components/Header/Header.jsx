import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import classnames from "classnames/bind";
import Icon from "components/Icon";
import MobileOverlay from "./MobileOverlay";
import useMedia from "hooks/useMedia";
import { addHeaderClassOnScroll } from "components/Header/helpers/scrollHelpers";
import style from "./style.css";

const cx = classnames.bind(style);

const Header = ({ isTransparent, className }) => {
	const isMobileView = useMedia("(max-width: 1024px)");
	const [isMobileOverlayStateShown, setMobileOverlayStateShown] = useState(false);

	const isMobileOverlayShown = isMobileView && isMobileOverlayStateShown;

	const toggleMobileOverlayShown = () => setMobileOverlayStateShown(!isMobileOverlayStateShown);
	const closeMobileOverlay = () => setMobileOverlayStateShown(false);

	const onScroll = () => {
		if (isTransparent) {
			addHeaderClassOnScroll(50, "_is-filled");
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
				{!isMobileView && (
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
				)}

				<NavLink to="/" className={style.logo}>cinevera</NavLink>

				{!isMobileView && (
					<div className={style.actions}>
						<Link
							to={{ search: "?search" }}
							className={style.button}
						>
							<Icon name="search" />
						</Link>

						<button className={style.button}>
							<Icon name="bell" />
						</button>

						<div className={style.dropdown_wrapper}>
							<NavLink to="/profile" className={style.button}>
								<div className={style.avatar} />
							</NavLink>

							<div className={style.dropdown_content}>
								<NavLink to="/profile" className={style.dropdown_link}>
									<Icon name="person" />
									<span className={style.dropdown_text}>My Profile</span>
								</NavLink>

								<NavLink to="/" className={style.dropdown_link}>
									<Icon name="favorite" />
									<span className={style.dropdown_text}>Favorites</span>
								</NavLink>

								<NavLink to="/" className={style.dropdown_link}>
									<Icon name="settings" />
									<span className={style.dropdown_text}>Settings</span>
								</NavLink>

								<NavLink to="/" className={style.dropdown_link}>
									<Icon name="logout" />
									<span className={style.dropdown_text}>Sign out</span>
								</NavLink>
							</div>
						</div>
					</div>
				)}

				{isMobileView && (
					<button className={style.mobile_menu} onClick={toggleMobileOverlayShown}>
						{isMobileOverlayStateShown && (
							<Icon name="close" />
						)}

						{!isMobileOverlayStateShown && (
							<Icon name="menu" />
						)}
					</button>
				)}
			</div>

			{isMobileOverlayShown && (
				<MobileOverlay onClose={closeMobileOverlay} />
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
