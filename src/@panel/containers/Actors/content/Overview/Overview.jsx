import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UploadFile from "components/FormElements/UploadFile";
import DetailsSection from "@panel/components/DetailsSection";
import EditableImage from "@panel/components/EditableImage";
import { updateActor } from "@panel/api/actors.api";
import { ActorDetailsContext } from "@panel/containers/Actors/store/ActorDetails.store";
import useDetailsData from "@panel/containers/Actors/hooks/useDetailsData";
import style from "./style.css";

const Overview = () => {
	const { photo } = useDetailsData();
	const { id } = useParams();
	const { actions } = useContext(ActorDetailsContext);

	const changePhoto = (photo) => {
		return updateActor(id, { photo })
			.then(({ actor }) => {
				actions.setData(actor);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className={style.overview}>
			<DetailsSection title="Photo" className={style.section}>
				<UploadFile value={photo} onChange={changePhoto}>
					<EditableImage type="avatar" />
				</UploadFile>
			</DetailsSection>
		</div>
	);
};

export default Overview;
