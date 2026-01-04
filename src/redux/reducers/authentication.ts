import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  messageError: string;
}
export interface IInfoAuthen {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  messageError: string;
}
const initialState: IAuthentication = {
  isProcessingRequest: false,
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false,
  messageError: "",
};
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    initStateAuth(state) {
      state.messageError = "";
      state.isProcessingRequest = false;
    },
    start: (state) => {
      state.isProcessingRequest = true;
      state.messageError = "";
    },
    success: (state, action: PayloadAction<IInfoAuthen>) => {
      return {
        ...state,
        isProcessingRequest: false,
        ...action.payload,
      };
    },
    error: (state, action: PayloadAction<IInfoAuthen>) => {
      return {
        ...state,
        isProcessingRequest: false,
        ...action.payload,
      };
    },
  },
});

export const { start, success, error, initStateAuth } =
  authenticationSlice.actions;
//   export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
