import React from "react";
import s from "./Avatar.module.css";
interface IProp {
  src: string;
  width: string;
  height: string;
  className?: string;
  isVoice?: boolean;
}
const Avatar: React.FC<IProp> = ({
  src,
  width,
  height,
  className = "",
  isVoice,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundImage: `url(${src})`,
        borderRadius: "100%",
      }}
      className={`${s.avatar} ${className}`}
    />
  );
};

export default Avatar;
