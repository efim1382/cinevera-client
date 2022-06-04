import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import BasicButton from "components/BasicButton";
import { createSeries } from "@panel/api/movies.api";

import BasicForm, { validations as basicValidations } from "./forms/Basic";
import ImagesForm, { validations as imagesValidations } from "./forms/Images";
import AdditionalForm, { validations as additionalValidations } from "./forms/Additional";
import CastForm, { validations as castValidations } from "./forms/Cast";

import style from "./style.css";

const validationsConfig = {
	0: basicValidations,
	1: imagesValidations,
	2: additionalValidations,
	3: castValidations,
};

const CreateSeries = () => {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);

	const isPrevButtonShown = currentStep > 0;

	const isStepBasicInformation = currentStep === 0;
	const isStepVisualizing = currentStep === 1;
	const isStepAdditional = currentStep === 2;
	const isStepCast = currentStep === 3;

	const validations = validationsConfig[currentStep];

	const submitText = isStepCast
		? "Submit"
		: "Continue";

	const openNextStep = () => setCurrentStep(currentStep + 1);
	const openPrevStep = () => setCurrentStep(currentStep - 1);

	const onSubmit = (values) => {
		return createSeries(values)
			.then(() => {
				navigate("/panel/series/");
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const handleSubmit = (values) => {
		if (isStepCast) {
			return onSubmit(values);
		}

		return openNextStep();
	};

	return (
		<main className={style.create_series}>
			<Form className={style.form} onSubmit={handleSubmit} validations={validations}>
				<div className={style.content}>
					<div className={style.form_box}>
						{isStepBasicInformation && (
							<BasicForm />
						)}

						{isStepVisualizing && (
							<ImagesForm />
						)}

						{isStepAdditional && (
							<AdditionalForm />
						)}

						{isStepCast && (
							<CastForm />
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

export default CreateSeries;
