import axios from "axios";

const instance = axios.create({
  baseURL: "...", // The API(URL) (the cloud function)
});

export default instance;
