import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logger";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500; //client errors

  if (!expectedError) {
    logger.log(error);
    toast.error("Sorry. Unexpected error");
  }

  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt; //need to refactor
}

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  setJwt
};
