import * as React from "react";
import "./PopUp.scss";

export interface IProps {
  onClose: () => void;
  hide: boolean;
}

const PopUp: React.SFC<IProps> = props => {
  return (
    <div className={`popup-background${props.hide ? " hide" : ""}`}>
      <div className="popup-content">
        <div className="close" onClick={props.onClose}>
          x
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default PopUp;
