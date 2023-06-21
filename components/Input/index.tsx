import React from "react";
import s from "./Input.module.css";
const Input = ({ width, height, rest }) => {
  return <input {...rest} className={s.input} style={{ width, height }} />;
};

export default Input;
