import axios from "axios";
import * as React from "react";

interface IResourceProps<R, E> {
  path: string;
  render: (state: IResourceState<R, E>) => React.ReactNode;
}

interface IResourceState<R, E> {
  loading: boolean;
  error: E;
  response: R;
}

export default class Resource<R, E> extends React.Component<
  IResourceProps<R, E>,
  IResourceState<R, E>
> {
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = (await axios.get(this.props.path)).data;
      this.setState({ response });
    } catch (e) {
      this.setState({ error: e });
    }
  }

  render() {
    return this.props.render(this.state);
  }
}
