import { ADDUSER, CLEARUSER } from "./types";

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADDUSER:
      return { ...state, user: action.payload };
    case CLEARUSER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default rootReducer;
