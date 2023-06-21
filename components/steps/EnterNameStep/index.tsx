import React, { useContext, useState } from "react";
import WhiteBlock from "../../WhiteBlock";
import StepInfo from "../StepInfo";
import Button from "../../Button";

import s from "./EnterNameStep.module.css";
import Input from "../../Input";
import { MainContext } from "../../../pages";
const EnterNameStep = () => {
  const { onNextStep, step } = useContext(MainContext);
  const [inputValue, setInputValue] = useState("");
  const nextDisabled = !inputValue;
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onClickNextStep = () => {
    onNextStep();
  };
  return (
    <>
      <StepInfo
        title={"What’s your full name?"}
        subtitle={"People use real names on Clubhouse :) Thnx!"}
        icon={"static/man.png"}
      />
      <WhiteBlock>
        <div className={s.inputBlock}>
          <input
            onChange={handleChangeInput}
            value={inputValue}
            placeholder="Enter fullname"
          />
        </div>
        <Button disabled={nextDisabled} onClick={onClickNextStep}>
          Next
        </Button>
      </WhiteBlock>
    </>
  );
};

export default EnterNameStep;
