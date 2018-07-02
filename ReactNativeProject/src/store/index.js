import thunk from "redux-thunk";
import { createStore,applyMiddleware } from "redux";
import  rootReducers  from "../reducers/index";

export const Store = createStore(rootReducers,applyMiddleware(thunk))