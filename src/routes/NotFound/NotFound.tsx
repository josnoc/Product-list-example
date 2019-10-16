import * as React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound: React.SFC = () => (
  <div>
    <h1>Sorry, We didn't find what you were looking for!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
