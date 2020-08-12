import App from "../client/containers/App";
import Home from "../client/components/Home";
import UsersList from "../client/components/UsersList";
import NotFound from "../client/components/NotFound";
import AdminsList from "../client/components/AdminsList";

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
        ...AdminsList,
        path: "/admins"
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
