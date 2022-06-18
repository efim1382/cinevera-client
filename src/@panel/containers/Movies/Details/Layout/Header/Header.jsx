import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";
import Icon from "components/Icon";
import LoadingRing from "components/LoadingRing";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Header = ({ className }) => {
	const { id } = useParams();
	const { state, actions } = useContext(MovieDetailsContext);
	const { data, isFetchComplete } = state;
	const [isTitleUpdating, setIsTitleUpdating] = useState(false);

	const onTitleBlur = (event) => {
		if (!event.target.innerText || event.target.innerText === data.title) {
			return;
		}

		setIsTitleUpdating(true);

		updateMovie(id, { title: event.target.innerText })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsTitleUpdating(false);
			})

			.catch((error) => {
				setIsTitleUpdating(false);
				console.log(error);
			});
	};

	if (!isFetchComplete) {
		return "Loading...";
	}

	return (
		<div className={cx("header", className)}>
			<div className={style.title_wrapper}>
				<h2
					contentEditable
					suppressContentEditableWarning
					onBlur={onTitleBlur}
					className={style.title}
				>
					{data.title}
				</h2>

				<LoadingRing isShown={isTitleUpdating} className={style.loading} />
			</div>

			<div className={style.add_menu_wrapper}>
				<button className={style.add_button}>
					<Icon name="add" className={style.add_icon} />
				</button>

				<div className={style.dropdown}>
					<NavLink to="/" className={style.dropdown_link}>
						<Icon name="add" />
						<span>Add movie</span>
					</NavLink>

					<NavLink to="/" className={style.dropdown_link}>
						<Icon name="delete_forever" />
						<span>Delete</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string,
};

export default Header;
