import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lws-server-node.herokuapp.com",
});

export default axiosInstance;
