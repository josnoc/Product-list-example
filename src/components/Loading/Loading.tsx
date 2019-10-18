import * as React from "react";
import "./Loading.scss";

interface IProps {
  fullScreen?: boolean;
}

const Loading: React.SFC<IProps> = props => {
  return (
    <div
      className={`loading-container${props.fullScreen ? " full-screen" : ""}`}
    >
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
    </div>
  );
};

export default Loading;
