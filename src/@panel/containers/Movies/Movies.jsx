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

						<div className={cx("table_cell", "genre_box")}>
							<span className={style.genre_film}>Genre</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="crime" className={style.genre}>Crime</span>
							<span data-genre="action" className={style.genre}>Action</span>
							<span data-genre="thriller" className={style.genre}>Thriller</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Mystery</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="animation" className={style.genre}>Animation</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="fantasy" className={style.genre}>Fantasy</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="war" className={style.genre}>War</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="history" className={style.genre}>History</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="documentary" className={style.genre}>Documentary</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="western" className={style.genre}>Western</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="adventure" className={style.genre}>Adventure</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="drama" className={style.genre}>Drama</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="horror" className={style.genre}>Horror</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="romance" className={style.genre}>Romance</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="comedy" className={style.genre}>Comedy</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="family" className={style.genre}>Family</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="biography" className={style.genre}>Biography</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="musical" className={style.genre}>Musical</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Criminal</span>
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

						<div className={cx("table_cell", "genre_box")}>
							<span data-genre="mystery" className={style.genre}>Mystery</span>
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
