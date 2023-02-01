import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axios.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(async (response) => {
  if (response) {
    const createToken = await axios
      .get(response.baseURL + `token`)
      .then((res) => res.data);

    response.headers = {
      Authorization: `Bearer ${createToken.accessToken}`,
    };
  }
  return response;
});

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
