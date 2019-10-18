import * as React from "react";
import DetailedProduct from "../../components/DetailedProduct";
import Filter from "../../components/Filter";
import PopUp from "../../components/PopUp";
import "./ProductList.scss";

interface IProps {
  onFilter: (filterData: string) => void;
  onPopUpClose: () => void;
  showElement?: string | null;
}

const ProductList: React.SFC<IProps> = props => {
  return (
    <div className="product-list-container">
      {props.showElement && (
        <PopUp onClose={props.onPopUpClose}>
          <DetailedProduct id={props.showElement} />
        </PopUp>
      )}
      <Filter filterFunction={props.onFilter} />
      <div className="product-list">{props.children}</div>
    </div>
  );
};

export default ProductList;
