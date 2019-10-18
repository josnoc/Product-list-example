import * as React from "react";
import { IProduct, ProductStyles } from "../Product/Product";
import DetailedProduct from "./DetailedProduct";

interface IProps {
  product: IProduct;
  fullscreen?: boolean;
}

export default class DetailedProductContainer extends React.Component<IProps> {
  render() {
    return (
      <DetailedProduct
        id={this.props.product.product_id}
        name={this.props.product.name}
        price={this.props.product.price}
        image={this.props.product.image}
        description={this.props.product.description}
        style={ProductStyles.detailed}
        fullScreen={this.props.fullscreen}
      />
    );
  }
}
