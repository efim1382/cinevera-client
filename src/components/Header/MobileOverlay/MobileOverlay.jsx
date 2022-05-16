import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "components/Icon";
import style from "./style.css";

const MobileOverlay = ({ onClose }) => {
	const navigate = useNavigate();

	const onNavLinkClick = (event) => {
		const linkHref = event.target.getAttribute("href");

		if (linkHref) {
			event.preventDefault();
			onClose();
			navigate(linkHref);
		}
	};

	useEffect(() => {
		document.body.style.setProperty("overflow", "hidden");

		return () => {
			document.body.style.removeProperty("overflow");
		};
	}, []);

	return (
		<div className={style.overlay}>
			<div className={style.content}>
				<div className={style.search_container}>
					<Icon name="search" />
					<input type="text" placeholder="Search" className={style.input} />
				</div>

				<nav className={style.navigation}>
					<NavLink
						to="/"
						onClick={onNavLinkClick}
						className={style.link}
					>
						Home
					</NavLink>

					<NavLink
						to="/movies/"
						onClick={onNavLinkClick}
						className={style.link}
					>
						Movies
					</NavLink>

					<NavLink
						to="/series/"
						onClick={onNavLinkClick}
						className={style.link}
					>
						TV Series
					</NavLink>
				</nav>

				<div className={style.divider} />

				<NavLink
					to="/auth/sign-in/"
					onClick={onNavLinkClick}
					className={style.link}
				>
					Sign in
				</NavLink>
			</div>
		</div>
	);
};

MobileOverlay.defaultProps = {
	onClose: Function(),
};

MobileOverlay.propTypes = {
	onClose: PropTypes.func,
};

export default MobileOverlay;
