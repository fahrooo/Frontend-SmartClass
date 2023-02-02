import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

axios.defaults.withCredentials = true;

const isLogin = Cookies.get("isLogin");
if (isLogin) {
  axiosInstance.interceptors.request.use(async (response) => {
    if (response) {
      const createToken = await axios
        .get(response.baseURL + `token`)
        .then((res) => res.data);

      console.log(createToken);

      response.headers = {
        Authorization: `Bearer ${createToken.accessToken}`,
      };
    }
    return response;
  });
}

export const getFetchcer = (resource, init) =>
  axiosInstance
    .get(resource, init)
    .then((res) => res.data)
    .catch((error) => console.log(error));

export const postFetcher = (resource, init) =>
  axiosInstance
    .post(resource, init)
    .then((res) => res.data)
    .catch((error) => console.log(error));

export default axiosInstance;
