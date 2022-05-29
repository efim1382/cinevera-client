import React from "react";
import Icon from "components/Icon";
import Subheader from "@panel/components/Subheader";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Movies = () => {
	return (
		<main className={style.movies}>
			<Subheader
				title="Movies list"
				to="/panel/movies/new/"
				className={style.subheader}
			/>

			<div className={style.table}>
				<div className={style.table_body}>

					<div className={style.headlines}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<div className={cx("table_cell", "name_box")}>
							<span className={style.name_films}>Name film</span>
						</div>

						<div className={cx("table_cell", "genres_box")}>
							<span className={style.genres_film}>Genres</span>
						</div>

						<div className={cx("table_cell", "year")}>Year</div>

						<div className={cx("table_cell", "navigation")} />
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="criminal" className={cx("genres", "crime")}>Crime</span>
							<span data-genre="action" className={cx("genres", "action")}>Action</span>
							<span data-genre="thriller" className={cx("genres", "thriller")}>Thriller</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Mystery</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="animation" className={cx("genres", "animation")}>Animation</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="fantasy" className={cx("genres", "fantasy")}>Fantasy</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="war" className={cx("genres", "war")}>War</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="history" className={cx("genres", "history")}>History</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="documentary" className={cx("genres", "documentary")}>Documentary</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="western" className={cx("genres", "western")}>Western</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="adventure" className={cx("genres", "adventure")}>Adventure</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="drama" className={cx("genres", "drama")}>Drama</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="horror" className={cx("genres", "horror")}>Horror</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="romance" className={cx("genres", "romance")}>Romance</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="comedy" className={cx("genres", "comedy")}>Comedy</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="family" className={cx("genres", "family")}>Family</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="biography" className={cx("genres", "biography")}>Biography</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="musical" className={cx("genres", "musical")}>Musical</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Criminal</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>

					<div className={style.table_row}>
						<div className={cx("table_cell", "table_input_box")}>
							<label className={style.checkbox_wrapper}>
								<input type="checkbox" className={style.input} />

								<div className={style.checkbox}>
									<Icon name="done" />
								</div>
							</label>
						</div>

						<NavLink to="/" className={cx("table_cell", "name_films_box")}>
							<span className={style.name_film}>Fight Clib</span>
						</NavLink>

						<div className={cx("table_cell", "genres_box")}>
							<span data-genre="mystery" className={cx("genres", "mystery")}>Mystery</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>
				</div>

				<div className={style.footer}>
					<div className={style.page_listing}>
						<button className={style.page_button}>
							<Icon name="expand_more" />
						</button>

						<div className={style.pagination}>
							<button className={style.page_number}>1</button>
							<button className={style.page_number}>2</button>
							<button className={style.page_number}>3</button>
							<div className={style.page_number}>...</div>
							<button className={style.page_number}>7</button>
							<button className={style.page_number}>8</button>
							<button className={style.page_number}>9</button>
						</div>

						<button className={style.page_button}>
							<Icon name="expand_less" />
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Movies;
