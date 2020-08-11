import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "../components/Header";

const App = ({ route }) => {
  console.log(route.routes[1]);
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
