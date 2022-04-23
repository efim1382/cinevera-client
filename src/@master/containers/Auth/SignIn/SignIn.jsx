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

const signIn = () => Promise.resolve();

const SignIn = () => {
	const navigate = useNavigate();
	const [isFetching, setIsFetching] = useState(false);

	const onSubmit = (values) => {
		setIsFetching(true);

		return signIn(values)
			.then((data) => {
				window.localStorage.setItem("token", data.token);
				setIsFetching(false);
				navigate("/");
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
					<h1>Cinevera</h1>
				</NavLink>
			</header>

			<main className={style.auth}>
				<div className={style.background}>
					<h2>Welcome to <span>SearchTabs</span></h2>

					<p className={style.text_description}>
						Please, enter your personal details
						<br />
						and start working with us
					</p>

					<NavLink to="/auth/sign-up/" className={style.link}>
						<BasicButton
							appearance="outline"
							theme="contrast"
							text="Sign Up"
						/>
					</NavLink>
				</div>

				<div className={style.section}>
					<h2 className={style.subtitle}>Sign in to<br />Account</h2>

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

					<p className={style.another_text}>Or use your email account</p>

					<Form
						className={style.form}
						onSubmit={onSubmit}
						validations={validations}
					>
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

						<NavLink to="/auth/forgot/" className={style.forgot}>Forgot your password?</NavLink>

						<BasicButton
							type="submit"
							text="Sign In"
							isLoading={isFetching}
							className={style.submit}
						/>
					</Form>
				</div>
			</main>
		</Fragment>
	);
};

export default SignIn;
