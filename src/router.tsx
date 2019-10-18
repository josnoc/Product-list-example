import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Prodcut from "./components/Product";
import NotFound from "./routes/NotFound";
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
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
