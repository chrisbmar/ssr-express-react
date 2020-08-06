import Home from "../client/components/Home";
import UsersList, { loadData } from "../client/components/UsersList";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
