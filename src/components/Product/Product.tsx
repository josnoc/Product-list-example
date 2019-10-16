import * as React from "react";
import "./Product.scss";

export enum ProductStyles {
  detailed = "detailed",
  quickView = "quick-view"
}

export interface IProductProps {
  name: string;
  /**
   * Can either be a *number*
   */
  price: number | string[];
  image: string;
  style: ProductStyles;
}

const Product = (props: IProductProps) => (
  <div className={`product ${props.style}`}>
    <img className="img" src={props.image} alt={props.name} />
    <div className="details">
      <p className="detail header name">{props.name}</p>
      <h3 className="detail price">
        <span className="integer">{(props.price as string[])[0]},</span>
        <span className="decimal">{(props.price as string[])[1]}</span>
      </h3>
    </div>
  </div>
);

export default Product;
