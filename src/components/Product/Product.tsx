import * as React from "react";
import "./Product.scss";

export interface IProductProps {
  name: string;
  price: number;
  image: string;
}

const Product = (props: IProductProps) => (
  <div className="product">
    <img src={props.image} alt={props.name} />
    <p className="name">{props.name}</p>
    <p className="price">{props.price}</p>
  </div>
);

export default Product;
