import React from "react";
import { NavLink, useParams } from "react-router-dom";
import BasicButton from "components/BasicButton";
import Icon from "components/Icon";
import DetailsSection from "@panel/components/DetailsSection";
import EditableImage from "@panel/components/EditableImage";
import useDetailsData from "@panel/hooks/useDetailsData";
import style from "./style.css";

const SeasonDetails = () => {
	const { id: seriesId, seasonNumber } = useParams();
	const { seasons } = useDetailsData();

	const {
		backgroundUrl,
		episodes = [],
	} = seasons.find((item) => `${item.number}` === seasonNumber);

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
					onChange={() => {}}
				/>
			</DetailsSection>

			<DetailsSection title="Episodes" className={style.section}>
				<div className={style.episodes_list}>
					<button className={style.add_new}>
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
		</div>
	);
};

export default SeasonDetails;
