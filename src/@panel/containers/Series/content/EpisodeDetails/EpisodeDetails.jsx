import React from "react";
import { useParams } from "react-router-dom";
import BasicButton from "components/BasicButton";
import DetailsSection from "@panel/components/DetailsSection";
import EditableContent from "@panel/components/EditableContent";
import EditableImage from "@panel/components/EditableImage";
import useDetailsData from "@panel/hooks/useDetailsData";
import style from "./style.css";

const EpisodeDetails = () => {
	const { id: seriesId, seasonNumber, episodeNumber } = useParams();
	const { seasons } = useDetailsData();

	const {
		episodes = [],
	} = seasons.find((item) => `${item.number}` === seasonNumber);

	const {
		posterUrl,
		title,
	} = episodes.find((item) => `${item.number}` === episodeNumber);

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

			<DetailsSection title="Episode Title" className={style.section}>
				<EditableContent defaultValue={title} />
			</DetailsSection>

			<DetailsSection title="Episode Preview" className={style.section}>
				<EditableImage
					type="episode"
					image={posterUrl}
					onChange={() => {}}
				/>
			</DetailsSection>
		</div>
	);
};

export default EpisodeDetails;
