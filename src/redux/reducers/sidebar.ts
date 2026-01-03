import { createAction, createReducer } from "@reduxjs/toolkit";
import { ActionSidebar } from "../action";

export interface SidebarState {
  isOpen: string;
  defaultId: string;
  opened: boolean;
}

// init state for reducer
const initialState: SidebarState = {
  isOpen: "",
  defaultId: "default",
  opened: true,
};

// create action
const menuOpen = createAction<string>(ActionSidebar.MenuOpen);
const setMenu = createAction<boolean>(ActionSidebar.SetMenu);

// create reducer
const sidebarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(menuOpen, (state, action): SidebarState => {
      const { payload: id } = action;
      return {
        ...state,
        isOpen: id,
      };
    })
    .addCase(setMenu, (state, action): SidebarState => {
      const { payload: opened } = action;
      return {
        ...state,
        opened,
      };
    });
});

export { sidebarReducer };
