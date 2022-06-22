import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UploadFile from "components/FormElements/UploadFile";
import DetailsSection from "@panel/components/DetailsSection";
import EditableImage from "@panel/components/EditableImage";
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

	const onChange = (values) => {
		return updateSeries(seriesId, values)
			.then(({ series }) => {
				actions.setData(series);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const changePosterImage = (value) => onChange({ [POSTER_FIELD_NAME]: value });
	const changeBackgroundImage = (value) => onChange({ [BACKGROUND_FIELD_NAME]: value });

	return (
		<div className={style.design}>
			<DetailsSection title="Background Image" className={style.section}>
				<UploadFile value={backgroundUrl} onChange={changeBackgroundImage}>
					<EditableImage type="background" />
				</UploadFile>
			</DetailsSection>

			<DetailsSection title="Poster" className={style.section}>
				<UploadFile value={posterUrl} onChange={changePosterImage}>
					<EditableImage type="poster" />
				</UploadFile>
			</DetailsSection>
		</div>
	);
};

export default Design;
