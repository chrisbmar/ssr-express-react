import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
// takes any special character such as <> and replaces them with their unicode equivalents
// this stops cross site attacks
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import routes from "../shared/routes";

export default (req, store, context) => {
  // html of our application
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
        <html>
            <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                  window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
