import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./EnterPhotoStep.module.css";
import StepInfo from "../StepInfo";
import WhiteBlock from "../../WhiteBlock";
import Button from "../../Button";
import Avatar from "../../Avatar";
import { MainContext } from "../../../pages";
const EnterPhotoStep: React.FC = () => {
  const { onNextStep, step } = useContext(MainContext);
  const [avatar, setAvatar] = useState<string>("static/prfoileAvatar.png");

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeImage = (e: Event): void => {
    const file = (e.target as HTMLInputElement).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage);
    }
  }, []);
  return (
    <>
      <StepInfo
        title={"Okay, Archakov Dennis!"}
        subtitle={"How’s this photo?"}
        icon={"static/confeti.png"}
      />
      <WhiteBlock>
        <div className={s.avatar}>
          <Avatar src={avatar} height={"120px"} width={"120px"} />
        </div>
        <div>
          <label htmlFor="image">Choose a different photo</label>
        </div>
        <input ref={inputFileRef} className={s.text} type="file" />
        <Button onClick={onNextStep}>Next</Button>
      </WhiteBlock>
    </>
  );
};

export default EnterPhotoStep;
