import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import BasicButton from "components/BasicButton";
import Overlay from "components/Overlay";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import { createSeason } from "@panel/api/movies.api";
import { SeasonsContext } from "@panel/containers/Series/store/Seasons.store";
import validations from "./validations";
import style from "./style.css";
import UploadFile from "../../../../../components/FormElements/UploadFile";
import UploadImage from "../../../../../components/UploadImage";

const AddSeasonOverlay = (props) => {
	const { onClose } = props;
	const { id: seriesId } = useParams();
	const navigate = useNavigate();
	const { actions } = useContext(SeasonsContext);
	const [isUpdating, setIsUpdating] = useState(false);

	const handleSubmit = (values) => {
		setIsUpdating(true);

		createSeason(seriesId, values)
			.then(({ season }) => {
				actions.addSeason(season);
				setIsUpdating(false);
				onClose();
				navigate(`/panel/series/${seriesId}/seasons/${season.number}/`);
			})

			.catch((error) => {
				console.log(error);
				setIsUpdating(false);
			});
	};

	return (
		<Overlay onClose={onClose}>
			<Form
				onSubmit={handleSubmit}
				validations={validations}
				className={style.form}
			>
				<Input name="backgroundUrl">
					<UploadFile>
						<UploadImage />
					</UploadFile>
				</Input>

				<BasicButton
					type="submit"
					text="Submit"
					isLoading={isUpdating}
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
