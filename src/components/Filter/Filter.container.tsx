import * as React from "react";
import Filter from "./Filter";

/* TODO:   Add "IsPopupDisplaying" Property to GlobalState.
 ** this will help to know when "PopUps" are being displayed,
 ** in order to prevent fixing the position of the filter bar and
 ** getting on the way of the PopUp.
 */

interface IProps {
  filterFunction: (filterData: string) => void;
}

interface IState {
  isSticky: boolean;
}

export default class FilterContainer extends React.Component<IProps, IState> {
  divRef: React.RefObject<HTMLDivElement>;
  filterDiv: HTMLDivElement = null as any;
  initialPosition = 0;
  state: IState = { isSticky: false };

  constructor(props: React.PropsWithChildren<IProps>) {
    super(props);
    this.divRef = React.createRef() as React.RefObject<HTMLDivElement>;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.filterDiv = this.divRef.current as HTMLDivElement;
    this.initialPosition = this.filterDiv.offsetTop;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Filter
        onKeyPress={this.onKeyPress}
        setRef={this.divRef}
        sticky={this.state.isSticky}
        onFocus={this.onFocus}
      />
    );
  }

  private onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.props.filterFunction(filterValue);
  };

  private onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const filterFiled = event.target;
    filterFiled.value = "";
    this.props.filterFunction("");
  };

  private onScroll = () => {
    if (window.pageYOffset > this.filterDiv.clientHeight)
      this.setState({ isSticky: true });
    else if (window.pageYOffset <= this.initialPosition)
      this.setState({ isSticky: false });
  };
}
