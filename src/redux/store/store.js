import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fileExtension } from "./file.middleware";
import rootReducer from "./reducer";

const initialState = {};
const middleWare = [thunk, fileExtension];
const middlewareEnhancer = applyMiddleware(...middleWare);

const composedEnhancer = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, initialState, composedEnhancer);
export default store;
