import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BasicButton from "components/BasicButton";
import DetailsSection from "@panel/components/DetailsSection";
import EditableContent from "@panel/components/EditableContent";
import EditableImage from "@panel/components/EditableImage";
import ChangeImagePopup from "@panel/components/ChangeImagePopup";
import { useEpisodeData } from "@panel/containers/Series/hooks/detailsData";
import { deleteEpisode, updateEpisode } from "@panel/api/movies.api";
import { SeasonsContext } from "@panel/containers/Series/store/Seasons.store";
import style from "./style.css";

const EpisodeDetails = () => {
	const { id: seriesId, seasonNumber } = useParams();
	const navigate = useNavigate();
	const { actions } = useContext(SeasonsContext);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isTitleUpdating, setIsTitleUpdating] = useState(false);
	const [isChangeEpisodeImagePopupShown, setIsChangeEpisodeImagePopupShown] = useState(false);

	const {
		id: episodeId,
		posterUrl,
		title,
	} = useEpisodeData();

	const openChangePosterPopup = () => setIsChangeEpisodeImagePopupShown(true);
	const closeChangePosterPopup = () => setIsChangeEpisodeImagePopupShown(false);

	const changeTitleSubmit = (value) => {
		setIsTitleUpdating(true);

		return updateEpisode(seriesId, episodeId, { title: value })
			.then(() => {
				actions.quiteRefresh()
					.then(() => {
						setIsTitleUpdating(false);
					});
			})

			.catch((error) => {
				console.log(error);
				setIsTitleUpdating(false);
			});
	};

	const changePosterSubmit = (values) => {
		return updateEpisode(seriesId, episodeId, values)
			.then(actions.quiteRefresh)

			.catch((error) => {
				console.log(error);
			});
	};

	const removeEpisode = () => {
		setIsDeleting(true);

		deleteEpisode(seriesId, episodeId)
			.then(() => {
				setIsDeleting(false);
				actions.refresh();
				navigate(`/panel/series/${seriesId}/seasons/${seasonNumber}/`);
			})

			.catch((error) => {
				console.log(error);
				setIsDeleting(false);
			});
	};

	return (
		<div className={style.episode_details}>
			<BasicButton
				appearance="fill"
				theme="translucent"
				icon="arrow_back"
				to={`/panel/series/${seriesId}/seasons/${seasonNumber}/`}
				text="Back to Season"
				className={style.back_button}
			/>

			<DetailsSection title="Episode Title" isLoading={isTitleUpdating} className={style.section}>
				<EditableContent defaultValue={title} onBlur={changeTitleSubmit} />
			</DetailsSection>

			<DetailsSection title="Episode Preview" className={style.section}>
				<EditableImage
					type="episode"
					image={posterUrl}
					onChange={openChangePosterPopup}
				/>
			</DetailsSection>

			<DetailsSection
				title="Delete Episode"
				text="if you delete an episode, all files and videos associated with it will be deleted, I hope you know what you are doing"
				className={style.section}
			>
				<BasicButton
					icon="delete"
					text="Delete"
					onClick={removeEpisode}
					isLoading={isDeleting}
					className={style.delete}
				/>
			</DetailsSection>

			{isChangeEpisodeImagePopupShown && (
				<ChangeImagePopup
					onSubmit={changePosterSubmit}
					fieldName="posterUrl"
					onClose={closeChangePosterPopup}
				/>
			)}
		</div>
	);
};

export default EpisodeDetails;
