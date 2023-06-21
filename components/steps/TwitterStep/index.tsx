import React, { useContext } from "react";
import s from "./TwitterStep.module.css";

import WhiteBlock from "../../WhiteBlock";
import Button from "../../Button";
import StepInfo from "../StepInfo";

import { MainContext } from "../../../pages";

const TwitterStep: React.FC = () => {
  const { onNextStep, step } = useContext(MainContext);
  return (
    <div className={s.block}>
      <StepInfo
        title="Do you want import info from Twitter?"
        icon={"static/fork.png"}
      />
      <WhiteBlock>
        {/*<img src="" alt="avatar" />*/}
        <div className={s.grayBlock}>Ak </div>
        <div className={s.name}>Archakov Denis</div>
        <Button onClick={onNextStep} className={s.importButton}>
          <img className={s.twitter} src="/static/twitter.svg" alt="" />
          Import from Twitter
        </Button>
        <div className={s.enter}>Enter my info manually</div>
      </WhiteBlock>
    </div>
  );
};

export default TwitterStep;
