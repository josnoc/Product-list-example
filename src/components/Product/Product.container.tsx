import * as React from "react";
import Product, { IProductProps } from "./Product";

export default class ProductContainer extends React.Component<IProductProps> {
  render() {
    return (
      <Product
        image={this.props.image}
        name={this.props.name}
        price={this.props.price}
      />
    );
  }
}
