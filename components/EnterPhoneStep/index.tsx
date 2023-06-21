import React, { useContext, useState } from "react";
import s from "./EnterPhoneStep.module.css";

import { PatternFormat } from "react-number-format";
import WhiteBlock from "../WhiteBlock";
import StepInfo from "../steps/StepInfo";
import Button from "../Button";
import { MainContext } from "../../pages";

type InputValueState = {
  formattedValue: string;
  value: string;
};
const EnterPhoneStep = () => {
  const [inputValue, setInputValue] = useState<InputValueState>(
    {} as InputValueState
  );
  const nextDisabled =
    !inputValue.formattedValue || inputValue.formattedValue.includes("_");

  const { onNextStep, step } = useContext(MainContext);

  const onClickNextStep = () => {
    onNextStep();
  };
  return (
    <>
      <StepInfo
        icon={"static/phone.png"}
        title={"Enter your phone #"}
        subtitle={"We will send you a confirmation code"}
      />
      <WhiteBlock>
        <PatternFormat
          className={s.inputNumber}
          placeholder="+7 (999) 333-22-11"
          format="+# (###) ###-##-##"
          mask="_"
          value={inputValue.value}
          onValueChange={({ formattedValue, value }) =>
            setInputValue({ formattedValue, value })
          }
        />
        <Button onClick={onClickNextStep} disabled={nextDisabled}>
          Next
        </Button>
        <div className={s.text}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </div>
      </WhiteBlock>
    </>
  );
};

export default EnterPhoneStep;
