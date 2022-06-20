import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DetailsSection from "@panel/components/DetailsSection";
import EditableImage from "@panel/components/EditableImage";
import ChangeImagePopup from "@panel/components/ChangeImagePopup";
import useDetailsData from "@panel/hooks/useDetailsData";
import { MovieDetailsContext } from "@panel/store/MovieDetails.store";
import { updateSeries } from "@panel/api/movies.api";
import style from "./style.css";

const POSTER_FIELD_NAME = "posterUrl";
const BACKGROUND_FIELD_NAME = "backgroundUrl";

const Design = () => {
	const { posterUrl, backgroundUrl } = useDetailsData();
	const { actions } = useContext(MovieDetailsContext);
	const { id: seriesId } = useParams();
	const [editableImageName, setEditableImageName] = useState("");

	const changePosterImage = () => setEditableImageName(POSTER_FIELD_NAME);
	const changeBackgroundImage = () => setEditableImageName(BACKGROUND_FIELD_NAME);
	const closeChangeImagePopup = () => setEditableImageName("");

	const onChange = (values) => {
		return updateSeries(seriesId, values)
			.then(({ series }) => {
				actions.setData(series);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className={style.design}>
			<DetailsSection title="Background Image" className={style.section}>
				<EditableImage
					type="background"
					image={backgroundUrl}
					onChange={changeBackgroundImage}
				/>
			</DetailsSection>

			<DetailsSection title="Poster" className={style.section}>
				<EditableImage
					image={posterUrl}
					onChange={changePosterImage}
				/>
			</DetailsSection>

			{editableImageName && (
				<ChangeImagePopup
					onSubmit={onChange}
					fieldName={editableImageName}
					onClose={closeChangeImagePopup}
				/>
			)}
		</div>
	);
};

export default Design;
