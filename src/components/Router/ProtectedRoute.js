import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  return isLoggedIn ? (
    <Route exact path={props.path}>
      {props.children}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
