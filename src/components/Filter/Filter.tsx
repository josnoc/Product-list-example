import * as React from "react";
import "./Filter.scss";

interface IFilterDisplayProps {
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setRef: React.RefObject<HTMLDivElement>;
  sticky: boolean;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Filter: React.SFC<IFilterDisplayProps> = props => {
  return (
    <div
      className={`filter${props.sticky ? " sticky" : ""}`}
      ref={props.setRef}
    >
      <div className="styled-txt">
        <input
          type="text"
          className="query"
          required
          onKeyUp={props.onKeyPress}
          onFocus={props.onFocus}
        />
        <label className="label">Find:</label>
      </div>
    </div>
  );
};

export default Filter;
