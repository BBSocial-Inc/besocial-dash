import axios from "axios";
import Cookies from "js-cookie";
import { constants } from "./utils";

const axiosInstance = axios.create({
  baseURL: constants.API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookie();

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

export function getTokenFromCookie() {
  return Cookies.get(constants.TOKEN_COOKIE_NAME);
}
