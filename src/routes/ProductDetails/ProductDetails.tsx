import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import DetailedProduct from "../../components/DetailedProduct";
import "./ProductDetails.scss";

interface IProps {
  product: string;
}

const ProductDetails: React.SFC<RouteComponentProps<IProps>> = props => {
  return (
    <div className="product-details">
      <Link className="btn_back" to="/list">
        Back to Product List
      </Link>
      <DetailedProduct id={props.match.params.product} fullScreen={true} />
    </div>
  );
};

export default ProductDetails;
