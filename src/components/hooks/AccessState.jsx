import React, { useContext } from "react";
import { Context } from "../../context";

const AccessState = () => {
  const { state } = useContext(Context);

  const { user } = state;
  return (
    <div>
      <h1>{user?.firstName}</h1>
      <h1>{user?.username}</h1>
    </div>
  );
};

export default AccessState;
