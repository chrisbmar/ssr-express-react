import Home from "../client/containers/Home";
import UsersList from "../client/containers/UsersList";

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...UsersList,
    path: "/users"
  }
];
