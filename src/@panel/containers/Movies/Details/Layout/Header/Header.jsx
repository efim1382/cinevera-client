import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Icon from "components/Icon";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
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

	const [isTitleEditable, setIsTitleEditable] = useState(false);
	const [isTitleLoading, setIsTitleLoading] = useState(false);

	const titleInitialValues = { title: data?.title || "" };

	const openTitleForm = () => setIsTitleEditable(true);
	const closeTitleForm = () => setIsTitleEditable(false);

	const onTitleSubmit = (values) => {
		setIsTitleLoading(true);

		updateMovie(id, values)
			.then(({ movie }) => {
				actions.setData(movie);
				setIsTitleLoading(false);
				closeTitleForm();
			})

			.catch((error) => {
				setIsTitleLoading(false);
				console.log(error);
			});
	};

	if (!isFetchComplete) {
		return "Loading...";
	}

	return (
		<div className={cx("header", className)}>
			{!isTitleEditable && (
				<div className={style.title_wrapper} onClick={openTitleForm}>
					<h2 className={style.title}>{data.title}</h2>

					<button type="button" className={style.edit_button} onClick={openTitleForm}>
						<Icon name="edit" />
					</button>
				</div>
			)}

			<div className={style.dropdown_wrapper}>
				<button className={style.add_button}>
					<Icon name="add" />
				</button>

				<div className={style.dropdown}></div>
			</div>

			{isTitleEditable && (
				<Form
					onSubmit={onTitleSubmit}
					initialValues={titleInitialValues}
					className={style.title_form}
				>
					<Input name="title">
						<TextField
							noHelperMessages
							autoFocus
							className={style.input}
						/>
					</Input>

					{!isTitleLoading && (
						<Fragment>
							<button type="submit" className={style.button}>
								<Icon name="mark" />
							</button>

							<button type="button" className={style.button} onClick={closeTitleForm}>
								<Icon name="close" />
							</button>
						</Fragment>
					)}

					{isTitleLoading && (
						<LoadingRing isShown className={style.loading} />
					)}
				</Form>
			)}
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string,
};

export default Header;
