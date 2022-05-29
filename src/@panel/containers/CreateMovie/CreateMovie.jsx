import React, { Fragment, useState } from "react";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import style from "./style.css";

const CreateMovie = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const isPrevButtonShown = currentStep > 0;

	const isStepBasicInformation = currentStep === 0;
	const isStepVisualizing = currentStep === 1;
	const isStepAdditional = currentStep === 2;
	const isStepCast = currentStep === 3;

	const submitText = isStepCast
		? "Submit"
		: "Continue";

	const openNextStep = () => setCurrentStep(currentStep + 1);
	const openPrevStep = () => setCurrentStep(currentStep - 1);

	const onSubmit = (values) => {
		console.log(values);
	};

	const handleSubmit = (values) => {
		if (isStepCast) {
			return onSubmit(values);
		}

		return openNextStep();
	};

	return (
		<main className={style.create_movie}>
			<Form className={style.form} onSubmit={handleSubmit}>
				<div className={style.content}>
					<div className={style.form_box}>
						{isStepBasicInformation && (
							<Fragment>
								<h1 className={style.title}>Add basic information</h1>
								<p className={style.caption}>Enter please main information about movie</p>

								<Input name="title">
									<TextField
										label="Title"
										className={style.input}
									/>
								</Input>

								<Input name="shortDescription">
									<TextField
										label="Short Description"
										className={style.input}
									/>
								</Input>

								<Input name="fullDescription">
									<TextField
										label="Full Description"
										className={style.input}
									/>
								</Input>
							</Fragment>
						)}

						{isStepVisualizing && (
							<Fragment>
								<h1 className={style.title}>Add images</h1>
								<p className={style.caption}>Enter please main movie images</p>

								<Input name="posterUrl">
									<TextField
										label="Poster"
										className={style.input}
									/>
								</Input>

								<Input name="backgroundUrl">
									<TextField
										label="Background"
										className={style.input}
									/>
								</Input>
							</Fragment>
						)}

						{isStepAdditional && (
							<Fragment>
								<h1 className={style.title}>Additional information</h1>
								<p className={style.caption}>Enter please movie additinal information</p>

								<Input name="ageLimit">
									<TextField
										label="Age Limit"
										className={style.input}
									/>
								</Input>

								<Input name="year">
									<TextField
										label="Year"
										className={style.input}
									/>
								</Input>

								<Input name="genres">
									<TextField
										label="Genres"
										className={style.input}
									/>
								</Input>
							</Fragment>
						)}

						{isStepCast && (
							<Fragment>
								<h1 className={style.title}>Add cast</h1>
								<p className={style.caption}>Add please this movie actors</p>

								<Input name="cast">
									<TextField
										label="Cast"
										className={style.input}
									/>
								</Input>
							</Fragment>
						)}
					</div>
				</div>

				<div className={style.footer}>
					{isPrevButtonShown && (
						<BasicButton
							type="button"
							onClick={openPrevStep}
							theme="translucent"
							appearance="fill"
							text="Previous"
						/>
					)}

					<BasicButton
						type="submit"
						theme="accent"
						appearance="fill"
						text={submitText}
					/>
				</div>
			</Form>
		</main>
	);
};

export default CreateMovie;
