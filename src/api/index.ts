import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

instance.defaults.headers["Content-Type"] = "application/json; charset=utf-8";
instance.defaults.headers.Accept = "application/json; charset=utf-8";

export default instance;
