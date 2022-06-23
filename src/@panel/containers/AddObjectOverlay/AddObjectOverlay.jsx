import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import useQuery from "hooks/useQuery";
import * as moviesApi from "@panel/api/movies.api";
import validations from "./validations";
import style from "./style.css";

export const queryParam = "new-object";

const AddObjectOverlay = () => {
	const query = useQuery();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const type = query.get("new-object") || "movie";

	const isTypeMovie = type === "movie";
	const isTypeSeries = type === "series";

	const startYearLabel = isTypeSeries
		? "Start Year"
		: "Year";

	const closeOverlay = () => {
		query.delete(queryParam);
		navigate(`${location.pathname}${query.toString()}`);
	};

	const onSubmit = (values) => {
		const {
			title,
			yearFrom,
			yearTo,
			ageLimit,
		} = values;

		const year = yearTo
			? [yearFrom, yearTo]
			: [yearFrom];

		const request = isTypeSeries
			? moviesApi.createSeries
			: moviesApi.createMovie;

		setIsLoading(true);

		request({
			title,
			year,
			ageLimit,
		})
			.then(({ [type]: object }) => {
				setIsLoading(false);

				if (isTypeMovie) {
					navigate(`/panel/movies/${object.id}/`);
				}

				if (isTypeSeries) {
					navigate(`/panel/series/${object.id}/`);
				}
			})

			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};

	return (
		<Overlay onClose={closeOverlay}>
			<Form
				onSubmit={onSubmit}
				validations={validations}
				className={style.form}
			>
				<Input name="title">
					<TextField label="Title" />
				</Input>

				<div className={style.row}>
					<Input name="yearFrom">
						<TextField
							label={startYearLabel}
							maxLength="4"
						/>
					</Input>

					{isTypeSeries && (
						<Input name="yearTo">
							<TextField
								label="End Year"
								maxLength="4"
								helperText="*Optional"
							/>
						</Input>
					)}

					<Input name="ageLimit">
						<TextField
							label="Age Limit"
							maxLength="2"
						/>
					</Input>
				</div>

				<BasicButton
					type="submit"
					text="Submit"
					isLoading={isLoading}
					className={style.submit}
				/>
			</Form>
		</Overlay>
	);
};

export default AddObjectOverlay;
