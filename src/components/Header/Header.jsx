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

	const linkClassName = ({ isActive }) => isActive
		? cx("link", "_is-active")
		: style.link;

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
							className={linkClassName}
						>
							Home
						</NavLink>

						<NavLink
							to="/movies/"
							className={linkClassName}
						>
							Movies
						</NavLink>

						<NavLink
							to="/series/"
							className={linkClassName}
						>
							TV Series
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

						<div className={style.notification_dropdown}>

							<div className={style.subheader_notification}>
								<span>Notification</span>
								<button className={style.mark_button}>
									<Icon name="done_all" />
									<span>Mark as read</span>
								</button>
							</div>

							<NavLink to="/" className={style.notification_link}>
								<div className={style.circle}></div>

								<div className={style.notification_info}>
									<div className={style.description}>
										<p>Your password has been successfully changed.</p>
										<span>Jun 1, at 12:00 PM</span>
									</div>
									<Icon name="lock" />
								</div>
							</NavLink>

							<NavLink to="/" className={style.notification_link}>
								<div className={style.circle}></div>

								<div className={style.notification_info}>
									<div className={style.description}>
										<p>User "efim 1488" reacted to your comment.</p>
										<span>May 5, at 18:90 PM</span>
									</div>
									<div className={style.avatar}></div>
								</div>
							</NavLink>

							<NavLink to="/" className={style.notification_link}>
								<div className={style.circle}></div>

								<div className={style.notification_info}>
									<div className={style.description}>
										<p>Your subscription will end soon. Click to extend.</p>
										<span>Jun 1, at 12:00 PM</span>
									</div>
									<Icon name="subscriptions" />
								</div>
							</NavLink>

							<div className={style.subfooter_notification}	>
								<NavLink to="/">View all notifications</NavLink>
							</div>
						</div>

						<NavLink to="/profile" className={style.button}>
							<div className={style.avatar} />
						</NavLink>

						<div className={style.user_dropdown}>
							<div className={style.user}>
								<p className={style.name}>Roman Yefymov</p>

								<div className={style.avatar_wrapper}>
									<div className={style.avatar} />
								</div>
							</div>

							<NavLink to="/profile" className={style.dropdown_link}>
								<Icon name="person" />
								<span className={style.dropdown_text}>My Profile</span>
							</NavLink>

							<NavLink to="/" className={style.dropdown_link}>
								<Icon name="settings" />
								<span className={style.dropdown_text}>Account Settings</span>
							</NavLink>

							<div className={style.divider} />

							<NavLink to="/" className={style.dropdown_link}>
								<Icon name="favorite" />
								<span className={style.dropdown_text}>Watch Later</span>
							</NavLink>

							<NavLink to="/" className={style.dropdown_link}>
								<Icon name="favorite" />
								<span className={style.dropdown_text}>My Favorites</span>
							</NavLink>

							<div className={style.divider} />

							<NavLink to="/panel/" className={cx("dropdown_link", "danger")}>
								<Icon name="settings" />
								<span className={style.dropdown_text}>Panel</span>
							</NavLink>

							<div className={style.divider} />

							<NavLink to="/" className={style.dropdown_link}>
								<Icon name="logout" />
								<span className={style.dropdown_text}>Sign out</span>
							</NavLink>
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
