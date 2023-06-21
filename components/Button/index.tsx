import React, { ReactNode } from "react";
import s from "./Button.module.css";
interface IProps {
  children: ReactNode;
  disabled?: boolean;
  color?: "green" | "gray";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  disabled,
  color,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${s.innerButton}`}
    >
      {children}
    </button>
  );
};

export default Button;
