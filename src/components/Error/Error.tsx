import * as React from "react";
import "./Error.scss";

interface IProps {
  title: string;
  message: string;
  error: string;
  fullScreen?: boolean;
}

const Error: React.SFC<IProps> = props => {
  return (
    <div className={`error${props.fullScreen ? " fullscreen" : ""}`}>
      <h1 className="title">{props.title}</h1>
      <p className="message">{props.message}</p>
      <p className="code">{props.error}</p>
    </div>
  );
};

export default Error;
