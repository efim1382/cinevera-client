import React from "react";
import Subheader from "@panel/components/Subheader";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import style from "./style.css";

const cx = classnames.bind(style);

const Users = () => {
	return (
		<main className={style.movies}>
			<Subheader
				title="Users"
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
							<span className={style.name_films}>User type</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
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

						<NavLink to="/" className={cx("table_cell", "user_info")}>
							<div className={style.avatar} />

							<div className={style.user_data}>
								<p className={style.name}>Roman Yefimov</p>
								<p className={style.mail}>efim1382eblo@pes.com</p>
							</div>
						</NavLink>

						<div className={cx("table_cell", "user_type")}>
							<span data-genre="criminal" className={cx("type", "crime")}>Main Admin</span>
							<span data-genre="action" className={cx("type", "action")}>Subadmin</span>
						</div>

						<div className={cx("table_cell", "year")}>1998</div>

						<div className={cx("table_cell", "navigation")}>

							<button className={style.option_button}>
								<Icon name="delete" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Users;
