import React, { useState, useContext } from "react";
import BasicButton from "components/BasicButton";
import ChangeImagePopup from "./ChangeImagePopup";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

const POSTER_FIELD_NAME = "posterUrl";
const BACKGROUND_FIELD_NAME = "backgroundUrl";

const Design = () => {
	const [editableImageName, setEditableImageName] = useState("");
	const { state } = useContext(MovieDetailsContext);
	const { data } = state;

	const posterInline = { backgroundImage: `url(${data.posterUrl})` };
	const backgroundInline = { backgroundImage: `url(${data.backgroundUrl})` };

	const changePosterImage = () => setEditableImageName(POSTER_FIELD_NAME);
	const changeBackgroundImage = () => setEditableImageName(BACKGROUND_FIELD_NAME);
	const closeChangeImagePopup = () => setEditableImageName("");

	return (
		<div className={style.design}>
			<section className={style.section}>
				<h3 className={style.subtitle}>Background Image</h3>

				<p className={style.caption}>
					This picture will be on the detail page of the movie.
					<br />
					We recommend using an image size of at least 1920 x 1080 pixels in JPEG format.
					Animated pictures cannot be ordered. File size - no more than 4 MB.
				</p>

				<div className={style.image} style={backgroundInline}>
					<div className={style.change_image_wrapper}>
						<BasicButton
							appearance="fill"
							theme="translucent"
							text="Change Image"
							onClick={changeBackgroundImage}
							className={style.button}
						/>
					</div>
				</div>
			</section>

			<section className={style.section}>
				<h3 className={style.subtitle}>Poster</h3>

				<p className={style.caption}>
					This picture will be on a small block of the film.
					<br />
					We recommend using an image size of at least 350 x 540 pixels in JPEG format.
					Animated pictures cannot be ordered. File size - no more than 4 MB.
				</p>

				<div className={style.poster} style={posterInline}>
					<div className={style.change_image_wrapper}>
						<BasicButton
							appearance="fill"
							theme="translucent"
							text="Change Image"
							onClick={changePosterImage}
							className={style.button}
						/>
					</div>
				</div>
			</section>

			{editableImageName && (
				<ChangeImagePopup
					onSubmit={() => {}}
					onClose={closeChangeImagePopup}
					fieldName={editableImageName}
				/>
			)}
		</div>
	);
};

export default Design;
