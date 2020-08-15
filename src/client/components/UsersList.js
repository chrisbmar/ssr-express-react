import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

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

  const head = () => {
    return ( 
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  return (
    <div>
      {head()}
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
  component: UsersList,
};
