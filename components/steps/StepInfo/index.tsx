import React from "react";
import s from "./StepInfo.module.css";
interface IProp {
  title: string;
  subtitle?: string;
  icon: string;
}
const StepInfo: React.FC<IProp> = ({ icon, title, subtitle }) => {
  return (
    <div className={s.stepInfo}>
      <div className={s.block}>
        <img className={s.stepIcon} src={icon} alt="" />
        <h3>{title}</h3>
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export default StepInfo;
