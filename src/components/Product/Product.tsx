import * as React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

export enum ProductStyles {
  detailed = "detailed",
  quickView = "quick-view"
}

export interface IProduct {
  product_id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
export interface IProductProps {
  id: number;
  name: string;
  price: number | string[];
  image: string;
  style: ProductStyles;
  description?: string;
  fullScreen?: boolean;
}

const Product = (props: IProductProps) => (
  <div
    className={`product ${props.style}${props.fullScreen ? " fullScreen" : ""}`}
  >
    <div className="content">
      <img className="img" src={props.image} alt={props.name} />
      <div className="details">
        <p className="detail header name">{props.name}</p>
        {props.style === ProductStyles.detailed && (
          <p className="detail description">
            {props.description ? props.description : "No product description."}
          </p>
        )}
        <h3 className="detail price">
          <span className="integer">{(props.price as string[])[0]},</span>
          <span className="decimal">{(props.price as string[])[1]}</span>
        </h3>
      </div>
    </div>
  </div>
);

export default Product;
