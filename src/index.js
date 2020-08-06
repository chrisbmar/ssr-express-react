import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import routes from "./shared/routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  // logic to intialise and load data into the store
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    // renderer is a ssr helper function
    res.send(renderer(req, store));
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
