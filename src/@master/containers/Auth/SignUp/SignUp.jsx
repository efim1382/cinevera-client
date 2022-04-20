import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "components/Icon";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import { withValidationHandling } from "helpers/validation";
import validations from "./validations";
import style from "../style.css";

const createUser = () => {};

const SignUp = () => {
	const navigate = useNavigate();
	const [isFetching, setIsFetching] = useState(false);

	const onSubmit = (values) => {
		setIsFetching(true);

		return createUser(values)
			.then(() => {
				setIsFetching(false);
				navigate("/auth/sign-in/");
			})

			.catch(withValidationHandling((error) => {
				console.error(error);
				setIsFetching(false);
			}));
	};

	return (
		<Fragment>
			<header className={style.header}>
				<NavLink to="/" className={style.logo}>
					<h1>SearchFilm</h1>
				</NavLink>
			</header>

			<main className={style.auth}>
				<div className={style.background}>
					<h2>Welcome to <span>SearchTabs</span></h2>

					<p className={style.text_description}>
						To keep connected with us please
						<br />
						login with your personal info
					</p>

					<NavLink to="/auth/sign-in/" className={style.link}>
						<BasicButton
							appearance="outline"
							theme="contrast"
							text="Sign In"
						/>
					</NavLink>
				</div>

				<div className={style.section}>
					<h2 className={style.subtitle}>Create Account</h2>

					<div className={style.social}>
						<button type="button">
							<Icon name="facebook" iconSize="20px" />
						</button>

						<button type="button">
							<Icon name="google-plus" iconSize="30px" />
						</button>

						<button type="button">
							<Icon name="vk" iconSize="28px" />
						</button>
					</div>

					<p className={style.another_text}>Or use your email for registration</p>

					<Form
						className={style.form}
						onSubmit={onSubmit}
						validations={validations}
					>
						<Input name="name">
							<TextField
								label="Name"
								placeholder="John Wick"
								icon="person"
								className={style.input}
							/>
						</Input>

						<Input name="email">
							<TextField
								type="email"
								label="Email"
								placeholder="someemail@gmail.com"
								icon="email"
								className={style.input}
							/>
						</Input>

						<Input name="password">
							<TextField
								type="password"
								label="Password"
								placeholder="********"
								icon="lock"
								className={style.input}
							/>
						</Input>

						<BasicButton
							type="submit"
							text="Sign Up"
							isLoading={isFetching}
							className={style.submit}
						/>
					</Form>
				</div>
			</main>
		</Fragment>
	);
};

export default SignUp;
