import { AxiosError } from "axios";
import * as React from "react";
import Error from "../Error";
import Loading from "../Loading";
import { IProduct } from "../Product/Product";
import Resource from "../Resource";
import { IResourceState } from "../Resource/Resource";
import DetailedProductContainer from "./DetailedProduct.container";

interface IProps {
  id: string;
  fullScreen?: boolean;
}

const DetailedProductService: React.SFC<IProps> = props => {
  return (
    <Resource<IProduct, AxiosError, boolean>
      path={`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${props.id}/detail`}
      render={fetchProduct}
      props={props.fullScreen}
    />
  );
};

const fetchProduct = (
  resourceState: IResourceState<IProduct, AxiosError>,
  fullScreen?: boolean
) => {
  if (resourceState.isLoading) {
    return <Loading fullScreen />;
  }

  if (resourceState.error) {
    const { message, name } = resourceState.error;
    return (
      <Error
        fullScreen
        title="Oops, We don't have that anymore!"
        message="The product you are looking for is no longer available or has been removed."
        error={`${name}: ${message}`}
      />
    );
  }

  return (
    <DetailedProductContainer
      product={resourceState.response}
      fullscreen={fullScreen}
    />
  );
};

export default DetailedProductService;
