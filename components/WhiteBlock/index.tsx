import React from "react";
import s from "./WhiteBlock.module.css";
const WhiteBlock = ({ children, cls = "" }) => {
  return (
    <div className={s.whiteBlock}>
      <div className={s.whiteBlockChild}>{children}</div>
    </div>
  );
};

export default WhiteBlock;
