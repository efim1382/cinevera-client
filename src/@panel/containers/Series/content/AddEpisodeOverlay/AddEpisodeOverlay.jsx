import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import BasicButton from "components/BasicButton";
import Overlay from "components/Overlay";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import { createEpisode } from "@panel/api/movies.api";
import { SeasonsContext } from "@panel/containers/Series/store/Seasons.store";
import { useSeasonDetailsData } from "@panel/containers/Series/hooks/detailsData";
import validations from "./validations";
import style from "./style.css";

const AddSeasonOverlay = (props) => {
	const { onClose } = props;
	const { id: seriesId } = useParams();
	const navigate = useNavigate();
	const { actions } = useContext(SeasonsContext);
	const [isLoading, setIsLoading] = useState(false);

	const {
		id: seasonId,
		number,
	} = useSeasonDetailsData();

	const handleSubmit = (values) => {
		setIsLoading(true);

		createEpisode(seriesId, seasonId, values)
			.then(({ episode }) => {
				setIsLoading(false);
				actions.refresh();
				onClose();
				navigate(`/panel/series/${seriesId}/seasons/${number}/${episode.number}/`);
			})

			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	return (
		<Overlay onClose={onClose}>
			<Form
				onSubmit={handleSubmit}
				validations={validations}
				className={style.form}
			>
				<Input name="title">
					<TextField
						label="Title"
						className={style.input}
					/>
				</Input>

				<Input name="posterUrl">
					<TextField
						label="Image url"
						placeholder="https://domain.com/image.jpeg"
						className={style.input}
					/>
				</Input>

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

AddSeasonOverlay.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default AddSeasonOverlay;
