import React from "react";
import { renderRoutes } from "react-router-config";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { fetchCurrentUser } from "../actions/index";

const App = ({ route }) => {
  const authStatus = useSelector(state => state.auth);

  return (
    <div>
      <Header authStatus={authStatus} />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
