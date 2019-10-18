import * as QueryString from "query-string";
import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Product from "../../components/Product";
import { IProduct, ProductStyles } from "../../components/Product/Product";
import ProductList from "./ProductList";

/* TODO: Add "navigationDirection" property on global state.
 *  This will help adding animations for forward routing and backward routing.
 */

interface IProps extends RouteComponentProps {
  products: IProduct[];
}

interface IState {
  products: IProduct[];
  isMobile: boolean;
  showPopUp: string;
}

const defaultState: IState = {
  isMobile: false,
  products: [] as IProduct[],
  showPopUp: ""
};

interface IQueryParams {
  showPopUp?: number;
}

export default class ProductListContainer extends React.Component<
  IProps,
  IState
> {
  state = defaultState;
  selectedElement = 0;

  componentDidMount() {
    this.setState({ products: this.props.products });
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentDidUpdate(prevProps: IProps) {
    const queryParams = QueryString.parse(
      this.props.location.hash
    ) as IQueryParams;

    if (
      prevProps.location !== this.props.location &&
      queryParams.showPopUp &&
      this.state.showPopUp !== queryParams.showPopUp.toString()
    ) {
      this.setState({ showPopUp: queryParams.showPopUp.toString() });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    if (!this.state) return null;
    return (
      <ProductList
        onPopUpClose={this.onPopUpClose}
        onFilter={this.onFilter}
        showElement={this.state.showPopUp ? this.state.showPopUp : null}
      >
        {this.getProductElements(this.state.products)}
      </ProductList>
    );
  }

  private getProductElements = (products: IProduct[]) => {
    return products.map(product => {
      return (
        <Link
          key={product.product_id}
          to={`/list${
            this.state.isMobile
              ? "/" + product.product_id
              : `#showPopUp=${product.product_id}`
          }`}
        >
          <Product
            id={product.product_id}
            name={product.name}
            price={product.price}
            image={product.image}
            style={ProductStyles.quickView}
          />
        </Link>
      );
    });
  };

  private onFilter = (filterData: string) => {
    const filteredProducts = this.props.products.filter(product => {
      return filterData
        ? product.name.toUpperCase().includes(filterData.toUpperCase())
        : true;
    });

    this.setState({ products: filteredProducts });
  };

  private onPopUpClose = () => {
    this.setState({ showPopUp: "" });
  };

  private onResize = () => {
    if (window.innerWidth <= 1024 && !this.state.isMobile)
      this.setState({ isMobile: true });
    else if (window.innerWidth > 1024 && this.state.isMobile)
      this.setState({ isMobile: false });
  };
}
