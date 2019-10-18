import { AxiosError } from "axios";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { IProduct } from "../../components/Product/Product";
import Resource from "../../components/Resource";
import { IResourceState } from "../../components/Resource/Resource";
import ProductListContainer from "./ProductList.container";

interface IProductListResponse {
  products: IProduct[];
}

const ProductListService: React.SFC<RouteComponentProps> = props => {
  return (
    <Resource<IProductListResponse, AxiosError, RouteComponentProps>
      path="https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list"
      render={fetchProducts}
      props={props}
    />
  );
};

const fetchProducts = (
  resourceState: IResourceState<IProductListResponse, AxiosError>,
  props?: RouteComponentProps
) => {
  if (resourceState.isLoading) {
    return <Loading fullScreen />;
  }

  if (resourceState.error) {
    const { message, name } = resourceState.error;
    return (
      <Error
        fullScreen
        title="Oops, We've lost our communication!"
        message="The request you have made couldn't be accomplished."
        error={`${name}: ${message}`}
      />
    );
  }

  return (
    <ProductListContainer
      products={resourceState.response.products}
      {...(props as RouteComponentProps)}
    />
  );
};

export default ProductListService;
