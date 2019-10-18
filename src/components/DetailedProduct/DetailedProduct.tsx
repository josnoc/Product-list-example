import * as React from "react";
import Product from "../../components/Product";
import { IProductProps } from "../../components/Product/Product";
import "./DetailedProduct.scss";

interface IProps extends IProductProps {}

const DetailedProduct: React.SFC<IProps> = props => {
  return (
    <Product
      id={props.id}
      name={props.name}
      price={props.price}
      image={props.image}
      description={props.description}
      style={props.style}
      fullScreen={props.fullScreen}
    />
  );
};

export default DetailedProduct;
