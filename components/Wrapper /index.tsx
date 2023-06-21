import React, { ReactNode } from "react";
import s from "./Wrapper.module.css";

const Wrapper = ({ children }: ReactNode) => {
  return <div className={s.container}>{children}</div>;
};

export default Wrapper;
