import { combineReducers } from "@reduxjs/toolkit";
import { authenticationReducer } from "./Authentication";
import { sidebarReducer } from "./sidebar";

export const rootReducer = combineReducers({
  authenticationReducer,
  sidebarReducer,
});
