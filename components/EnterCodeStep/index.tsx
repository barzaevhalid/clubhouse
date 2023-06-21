import React, { useState } from "react";
import Axios from "../../core/axios";
import StepInfo from "../steps/StepInfo";
import WhiteBlock from "../WhiteBlock";
import Button from "../Button";

import s from "./EnterCodeStep.module.css";
import Loading from "../Loading";
import { useRouter } from "next/router";
const EnterCodeStep = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [codes, setCodes] = useState(["", "", "", ""]);
  const nextDisabled = codes.some((v) => !v) || codes.length < 4;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;
    setCodes((prevState) => {
      const newArr = [...prevState];
      newArr[id] = value;
      return newArr;
    });
    if (!e.target.value && e.target.previousElementSibling) {
      (e.target.previousElementSibling as HTMLInputElement).focus();
    }
    if (e.target.value && e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await Axios.get("/todos");
      router.push("/rooms");
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
    console.log();
  };
  return (
    <>
      {!isLoading ? (
        <>
          <StepInfo
            icon={"static/numbers-icon.png"}
            title={"Enter your activate code"}
          />
          <WhiteBlock>
            <div className={s.inputsWrapper}>
              <input
                onChange={handleChangeInput}
                className={s.input}
                type="tel"
                placeholder={"X"}
                id="1"
                maxLength={1}
                value={codes[0]}
              />
              <input
                value={codes[1]}
                onChange={handleChangeInput}
                className={s.input}
                type="tel"
                placeholder={"X"}
                id="2"
                maxLength={1}
              />
              <input
                value={codes[2]}
                onChange={handleChangeInput}
                className={s.input}
                type="tel"
                placeholder={"X"}
                id="3"
                maxLength={1}
              />
              <input
                value={codes[3]}
                onChange={handleChangeInput}
                className={s.input}
                type="tel"
                placeholder={"X"}
                id="4"
                maxLength={1}
              />
            </div>
            <Button onClick={onSubmit} disabled={nextDisabled}>
              Activate
            </Button>
          </WhiteBlock>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EnterCodeStep;
