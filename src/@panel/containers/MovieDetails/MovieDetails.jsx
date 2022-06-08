import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Icon from "components/Icon";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import LoadingRing from "components/LoadingRing";
import { getMovie, updateMovie } from "@panel/api/movies.api";
import style from "./style.css";
import Textarea from "../../../components/FormElements/Textarea";
import BasicButton from "../../../components/BasicButton";

const MovieDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [isMovieLoaded, setIsMovieLoaded] = useState(false);
	const [isTitleEditable, setIsTitleEditable] = useState(false);
	const [isTitleLoading, setIsTitleLoading] = useState(false);

	const titleInitialValues = { title: data.title };

	const descriptionInitialValues = {
		shortDescription: data.shortDescription,
		fullDescription: data.fullDescription,
	};

	const additionalInitialValues = {
		year: data.year ? data.year[0] : "",
		ageLimit: data.ageLimit,
	};

	const openTitleForm = () => setIsTitleEditable(true);
	const closeTitleForm = () => setIsTitleEditable(false);

	const onTitleSubmit = (values) => {
		setIsTitleLoading(true);

		updateMovie(id, values)
			.then(({ movie }) => {
				setData(movie);
				setIsTitleLoading(false);
				closeTitleForm();
			})

			.catch((error) => {
				setIsTitleLoading(false);
				console.log(error);
			});
	};

	useEffect(() => {
		getMovie(id)
			.then(({ movie }) => {
				setData(movie);
				setIsMovieLoaded(true);
			})

			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (!isMovieLoaded) {
		return null;
	}

	return (
		<div className={style.details}>
			<div className={style.subheader}>
				{!isTitleEditable && (
					<div className={style.title_wrapper} onClick={openTitleForm}>
						<h2 className={style.title}>{data.title}</h2>

						<button type="button" className={style.edit_button} onClick={openTitleForm}>
							<Icon name="edit" />
						</button>
					</div>
				)}

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

			<nav className={style.tabs}>
				<NavLink to="/" className={style.tab}>Overview</NavLink>
				<NavLink to="/" className={style.tab}>Design</NavLink>
				<NavLink to="/" className={style.tab}>Media</NavLink>
			</nav>

			<div className={style.content}>
				<h3 className={style.title_section}>Description</h3>

				<Form onSubmit={() => {}} initialValues={descriptionInitialValues} className={style.form_section}>
					<Input name="shortDescription">
						<TextField
							label="Short description"
						/>
					</Input>

					<Input name="fullDescription">
						<Textarea
							label="Full description"
						/>
					</Input>

					<BasicButton
						type="submit"
						text="Update"
						className={style.submit}
					/>
				</Form>

				<h3 className={style.title_section}>More information</h3>

				<Form onSubmit={() => {}} initialValues={additionalInitialValues} className={style.form_section}>
					<Input name="year">
						<TextField
							label="Year"
						/>
					</Input>

					<Input name="ageLimit">
						<TextField
							label="Age Rating"
						/>
					</Input>

					<BasicButton
						type="submit"
						text="Update"
						className={style.submit}
					/>
				</Form>
			</div>
		</div>
	);
};

export default MovieDetails;
