import { combineReducers } from "redux";

import directoryReducer from "./directoryReducer";
import errorLogReducer from "./errorLogReducer";

const rootReducer = combineReducers({
  directory: directoryReducer,
  errorLog: errorLogReducer,
});

export default rootReducer;
