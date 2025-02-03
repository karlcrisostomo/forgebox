import Config from "@/Config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/webfonts/v1",
  params: {
    key: Config.apiKey,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
