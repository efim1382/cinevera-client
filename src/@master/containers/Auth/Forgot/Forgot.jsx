import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import { withValidationHandling } from "helpers/validation";
import validations from "./validations";
import style from "../style.css";

const resetPassword = () => Promise.resolve();

const Forgot = () => {
	const [isSuccessMessageShown, setIsSuccessMessageShown] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	const openResetPasswordState = () => setIsSuccessMessageShown(false);

	const onSubmit = (values) => {
		setIsFetching(true);

		return resetPassword(values)
			.then(() => {
				setIsFetching(false);
				setIsSuccessMessageShown(true);
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
						Please, enter your personal details
						<br />
						and start working with us
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
					{!isSuccessMessageShown && (
						<Fragment>
							<h2 className={style.subtitle}>Reset password</h2>

							<p className={style.another_text}>
								Enter the email associated with your account
								<br />
								and we'll send an email with instructions to reset your password
							</p>

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

								<BasicButton
									type="submit"
									text="Continue"
									isLoading={isFetching}
									className={style.submit}
								/>
							</Form>
						</Fragment>
					)}

					{isSuccessMessageShown && (
						<Fragment>
							<h2 className={style.subtitle}>Check your email</h2>

							<p className={style.another_text}>
								We have sent a password recover instructions to your email
							</p>

							<NavLink to="/auth/sign-in/" className={style.signin_link}>
								<BasicButton text="Back to Sign In" />
							</NavLink>

							<p className={style.hint}>
								Did not receive the email? Check your spam filter
								<br />
								or <button onClick={openResetPasswordState}>try another email address</button>
							</p>
						</Fragment>
					)}
				</div>
			</main>
		</Fragment>
	);
};

export default Forgot;
