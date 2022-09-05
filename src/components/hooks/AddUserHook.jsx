import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { ADDUSER, CLEARUSER } from "../../context/types";
import AccessState from "./AccessState";

const AddUserHook = () => {
  const [data, setData] = useState({
    firstName: "",
    username: "",
  });

  const { dispatch } = useContext(Context);

  const addData = () => {
    dispatch({
      type: ADDUSER,
      payload: data,
    });
  };

  const addInfo = () => {
    setData({
      firstName: "Mark",
      username: "markTonto",
    });
  };

  const clearData = () => {
    dispatch({
      type: CLEARUSER,
    });
  };
  return (
    <div>
      <button onClick={addInfo}>Add Info</button>
      <button onClick={addData}>Add Data</button>
      <button onClick={clearData}>Clear Data</button>
      <div>
        <AccessState />
      </div>
    </div>
  );
};

export default AddUserHook;
