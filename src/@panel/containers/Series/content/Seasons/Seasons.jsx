import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Icon from "components/Icon";
import DetailsSection from "@panel/components/DetailsSection";
import AddSeasonOverlay from "@panel/containers/Series/content/AddSeasonOverlay";
import { useSeasonsData } from "@panel/containers/Series/hooks/detailsData";
import style from "./style.css";

const Seasons = () => {
	const { id: seriesId } = useParams();
	const [isAddSeasonOverlayShown, setIsAddSeasonOverlayShown] = useState(false);
	const seasons = useSeasonsData();

	const openAddSeasonOverlay = () => setIsAddSeasonOverlayShown(true);
	const closeAddSeasonOverlay = () => setIsAddSeasonOverlayShown(false);

	return (
		<div className={style.seasons}>
			<DetailsSection title="Seasons List">
				<div className={style.list}>
					<button className={style.add_new} onClick={openAddSeasonOverlay}>
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
							<p className={style.caption}>Add Season</p>
						</div>
					</button>

					{seasons.map((item) => {
						const inline = { backgroundImage: `url(${item.backgroundUrl})` };

						return (
							<NavLink
								key={item.id}
								to={`/panel/series/${seriesId}/seasons/${item.number}`}
								className={style.item}
								style={inline}
							>
								<span className={style.number}>{item.number}</span>
							</NavLink>
						);
					})}
				</div>
			</DetailsSection>

			{isAddSeasonOverlayShown && (
				<AddSeasonOverlay onClose={closeAddSeasonOverlay} />
			)}
		</div>
	);
};

export default Seasons;
