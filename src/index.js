import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import routes from "./shared/routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();
const PORT = 3000;

// proxies requests from the client and adds a header to redirect to localhost:3000 after Oauth
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

// serves the public folder statically 
app.use(express.static("public"));

// ssr and loadData for the store on requests to all routes
app.get("*", (req, res) => {
  const store = createStore(req);
  // logic to intialise and load data into the store
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    // renderer is a ssr helper function
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
