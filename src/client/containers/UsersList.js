import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions";

const UsersList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    return users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      Here's a big list of users:
      <ul>{users && renderUsers()}</ul>
    </div>
  );
};

export const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: UsersList
};
