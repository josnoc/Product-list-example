import * as React from "react";
import PopUp from "./PopUp";

interface IState {
  hide: boolean;
}

interface IProps {
  onClose: () => void;
}

const defaultState: IState = {
  hide: false
};

export default class PopUpContainer extends React.Component<IProps, IState> {
  state = defaultState;

  render() {
    return (
      <PopUp onClose={this.onClose} hide={this.state.hide}>
        {this.props.children}
      </PopUp>
    );
  }

  private onClose = () => {
    this.setState({ hide: true }, () => {
      setTimeout(this.props.onClose, 400);
    });
  };
}
