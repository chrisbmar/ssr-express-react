import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  // logic to intialise and load data into the store

  // renderer is a ssr helper function
  res.send(renderer(req, store));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
