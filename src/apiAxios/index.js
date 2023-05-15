import axios from "axios";
const Api = axios.create({
  baseURL: "http://localhost:80",
  headers: { "X-Custom-Header": "foobar" },
});
export default Api;