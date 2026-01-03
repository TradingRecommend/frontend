import { IAuthenStoraged } from "./type";

// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;

// login url
export const loginUrl =
  process.env.REACT_APP_LOGIN_URL || "https://10.0.175.76/sso/login";

//AuthenStorage
export const authenStorage: IAuthenStoraged = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};

export const messageServer = {
  Error: "Có lỗi xảy ra. Vui lòng thử lại!",
};
