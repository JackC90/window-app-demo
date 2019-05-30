import React from "react";
import List from '../../components/List/List';
import { state } from '../../static-data';

const ListGenerator = () => {
  // const state = store.getState();
  const { users } = state;
  return (
    <div className="ChatWindow">
      <List users={users} />
    </div>
  );
};

export default ListGenerator;