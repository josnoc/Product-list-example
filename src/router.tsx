import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import ProductDetails from "./routes/ProductDetails";
import ProductList from "./routes/ProductList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/list"></Redirect>
      </Route>
      <Route exact path="/list" component={ProductList} />
      <Route exact path="/list/:product" component={ProductDetails} />
      <Route>
        <Error
          fullScreen
          title="Uh oh!, This page doesn't Exist"
          message="Sorry, the page you were looking for couldn't be found."
          error="404 Not Found"
        />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
