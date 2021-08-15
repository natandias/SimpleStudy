import { useState, useEffect } from "react";
import Congratulations from "./Congratulations";
import RegisterPasswordData from "./PasswordData";
import RegisterUserData from "./UserData";

import { UserFormData, PasswordFormData } from "./types";


export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userData: {},
    passwordData: {},
  });

  const changeToStep = (step: number) => {
    setCurrentStep(step);
  };

  const goBack = () => changeToStep(currentStep - 1);
  const goNext = () => changeToStep(currentStep + 1);

  const submit = (data: UserFormData | PasswordFormData) => {
    const objectToBeModified = currentStep === 0 ? "userData" : "passwordData";

    const newData = { ...formData[objectToBeModified], ...data };
    const newFormData = { ...formData, [objectToBeModified]: newData };

    setFormData(newFormData);
  };

  return (
    <>
      {currentStep === 0 && (
        <RegisterUserData goNext={goNext} submit={submit} />
      )}
      {currentStep === 1 && (
        <RegisterPasswordData goBack={goBack} goNext={goNext} submit={submit} />
      )}
      {currentStep === 2 && <Congratulations goNext={goNext} />}
    </>
  );
}
