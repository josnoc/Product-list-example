import * as React from "react";
import { Link } from "react-router-dom";
import Product, { IProductProps, ProductStyles } from "./Product";

export default class ProductContainer extends React.Component<IProductProps> {
  render() {
    return (
      <Product
        id={this.props.id}
        image={this.props.image}
        name={this.props.name}
        price={
          isNaN(this.props.price as number)
            ? this.props.price
            : this.formatPrice(this.props.price as number)
        }
        description={this.props.description}
        style={this.props.style}
        fullScreen={this.props.fullScreen}
      />
    );
  }

  private formatPrice(price: number) {
    const formatOptions: Intl.NumberFormatOptions = {
      currency: "EUR",
      style: "currency"
    };

    return new Intl.NumberFormat("nl-NL", formatOptions)
      .format(price)
      .split(",");
  }
}
