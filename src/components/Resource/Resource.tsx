import axios from "axios";
import * as React from "react";

interface IResourceProps<R, E, P = {}> {
  path: string;
  render: (state: IResourceState<R, E>, props?: P) => React.ReactNode;
  props?: P;
}

export interface IResourceState<R, E> {
  isLoading: boolean;
  error: E;
  response: R;
}

export default class Resource<R, E, P = {}> extends React.Component<
  IResourceProps<R, E, P>,
  IResourceState<R, E>
> {
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const response = (await axios.get(this.props.path)).data;
      this.setState({ isLoading: false, response });
    } catch (e) {
      this.setState({ isLoading: false, error: e });
    }
  }

  render() {
    if (!this.state) return null;

    return this.props.render(this.state, this.props.props);
  }
}
