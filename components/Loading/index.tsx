import React from "react";
import s from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={s.loading}>
      <div>
        <div>
          <img src="static/loading.png" alt="" />
        </div>
        <div className={s.text}>Activation in progress ...</div>
      </div>
    </div>
  );
};

export default Loading;
