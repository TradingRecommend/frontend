import { combineReducers } from "@reduxjs/toolkit";
import { authenticationReducer } from "./authentication";
import { sidebarReducer } from "./sidebar";
import { industryReducer } from "./industry";
import { companyReducer } from "./company";

export const rootReducer = combineReducers({
  authenticationReducer,
  sidebarReducer,
  industryReducer,
  companyReducer,
});
