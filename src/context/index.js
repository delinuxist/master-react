import { createContext, useReducer } from "react";
import rootReducer from "./rootReducer";

const initialState = {
  user: null,
};

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
