import axios from "axios";
import { ApiService } from "./serviceApi";

class AppServer extends ApiService {
  constructor() {
    super();
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API,
      timeout: 50000,
    });
  }
}

export default AppServer.getInstance();
