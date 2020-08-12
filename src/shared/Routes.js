import App from "../client/containers/App";
import Home from "../client/components/Home";
import UsersList from "../client/components/UsersList";
import NotFound from "../client/components/NotFound";

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...UsersList,
        path: "/users"
      },
      {
        ...NotFound
      }
    ]
  }
];
