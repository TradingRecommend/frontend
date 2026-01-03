import axios from "axios";
import { ApiService } from "./serviceApi";

class AuthenServer extends ApiService {
  constructor() {
    super();
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_AUTHEN,
      timeout: 5000,
    });
  }
}

export default AuthenServer.getInstance();
