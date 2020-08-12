import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const requireAuth = Component => props => {
  const isAuth = useSelector(state => state.auth);
  return isAuth ? <Component {...props} /> : <Redirect to="/" />;
};

export default requireAuth;
