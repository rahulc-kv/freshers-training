import { combineReducers } from "redux";

import counter from "redux/slices/counter";
import todoListReducer from "../container/todo-page/slice";

import {store} from "./store"

const rootReducer = combineReducers({ counter, todoListReducer });

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
