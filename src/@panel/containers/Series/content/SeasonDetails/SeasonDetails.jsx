import React, { useState, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import BasicButton from "components/BasicButton";
import Icon from "components/Icon";
import DetailsSection from "@panel/components/DetailsSection";
import EditableImage from "@panel/components/EditableImage";
import ChangeImagePopup from "@panel/components/ChangeImagePopup";
import AddEpisodeOverlay from "../AddEpisodeOverlay";
import { deleteSeason, updateSeason } from "@panel/api/movies.api";
import { useSeasonDetailsData } from "@panel/containers/Series/hooks/detailsData";
import { SeasonsContext } from "@panel/containers/Series/store/Seasons.store";
import style from "./style.css";

const SeasonDetails = () => {
	const navigate = useNavigate();
	const { actions } = useContext(SeasonsContext);
	const { id: seriesId, seasonNumber } = useParams();
	const [isDeleting, setIsDeleting] = useState(false);
	const [isAddEpisodeOverlayShown, setIsAddEpisodeOverlayShown] = useState(false);
	const [isChangeBackgroundPopupShown, setIsChangeBackgroundPopupShown] = useState(false);

	const {
		id: seasonId,
		backgroundUrl,
		episodes = [],
	} = useSeasonDetailsData(seasonNumber);

	const isEpisodesExist = episodes.length > 0;

	const openAddEpisodeOverlay = () => setIsAddEpisodeOverlayShown(true);
	const closeAddEpisodeOverlay = () => setIsAddEpisodeOverlayShown(false);

	const openChangeBackgroundPopup = () => setIsChangeBackgroundPopupShown(true);
	const closeChangeBackgroundPopup = () => setIsChangeBackgroundPopupShown(false);

	const changeBackgroundSubmit = (values) => {
		return updateSeason(seriesId, seasonId, values)
			.then(actions.quiteRefresh)

			.catch((error) => {
				console.log(error);
			});
	};

	const removeSeason = () => {
		setIsDeleting(true);

		deleteSeason(seriesId, seasonId)
			.then(() => {
				setIsDeleting(false);
				actions.refresh();
				navigate(`/panel/series/${seriesId}/seasons/`);
			})

			.catch((error) => {
				console.log(error);
				setIsDeleting(false);
			});
	};

	return (
		<div className={style.season_details}>
			<BasicButton
				appearance="fill"
				theme="translucent"
				icon="arrow_back"
				to={`/panel/series/${seriesId}/seasons/`}
				text="Back to Seasons"
				className={style.back_button}
			/>

			<DetailsSection title="Background Image" className={style.section}>
				<EditableImage
					type="background"
					image={backgroundUrl}
					onChange={openChangeBackgroundPopup}
				/>
			</DetailsSection>

			<DetailsSection title="Episodes" className={style.section}>
				<div className={style.episodes_list}>
					<button className={style.add_new} onClick={openAddEpisodeOverlay}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="100%"
							height="100%"
						>
							<rect
								width="100%"
								height="100%"
								fill="none"
								rx="3"
								ry="3"
								strokeWidth="4"
								strokeDasharray="6, 14"
								strokeDashoffset="0"
								strokeLinecap="square"
							/>
						</svg>

						<div className={style.inner}>
							<Icon name="add" />
							<p className={style.caption}>Add Episode</p>
						</div>
					</button>

					{episodes.map((item) => {
						const inline = { backgroundImage: `url(${item.posterUrl})` };

						return (
							<NavLink
								key={item.id}
								to={`/panel/series/${seriesId}/seasons/${seasonNumber}/${item.number}/`}
								style={inline}
								className={style.item}
							>
								<span className={style.number}>{item.number}</span>
							</NavLink>
						);
					})}
				</div>
			</DetailsSection>

			<DetailsSection
				title="Delete Season"
				text="To delete a season make sure you delete all episodes. Are you sure you want to delete the season?"
				className={style.section}
			>
				<BasicButton
					icon="delete"
					text="Delete"
					onClick={removeSeason}
					isDisabled={isEpisodesExist}
					isLoading={isDeleting}
					className={style.delete}
				/>
			</DetailsSection>

			{isAddEpisodeOverlayShown && (
				<AddEpisodeOverlay onClose={closeAddEpisodeOverlay} />
			)}

			{isChangeBackgroundPopupShown && (
				<ChangeImagePopup
					onSubmit={changeBackgroundSubmit}
					fieldName="backgroundUrl"
					onClose={closeChangeBackgroundPopup}
				/>
			)}
		</div>
	);
};

export default SeasonDetails;
