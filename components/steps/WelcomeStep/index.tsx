import React, { useContext } from "react";
import WhiteBlock from "../../WhiteBlock";
import Button from "../../Button";
import { MainContext } from "../../../pages";

import s from "./WelcomeStep.module.css";
const WelcomeStep: React.FC = () => {
  const { onNextStep, step } = useContext(MainContext);
  return (
    <div className={s.block}>
      <WhiteBlock>
        <h3 className={s.title}>
          <img className={s.hand} src="static/hand.png" alt="" />
          Welcome to clubhouse
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          consequatur debitis esse et laborum maiores, molestiae omnis quisquam.
          Distinctio eaque, officiis. Aspernatur cupiditate dolor hic maiores,
          repudiandae sed tempore voluptates.
        </p>
        <Button onClick={onNextStep}>Get your username</Button>
        <div className={s.haveIntive}>Have an invite text? Sign In</div>
      </WhiteBlock>
    </div>
  );
};

export default WelcomeStep;
