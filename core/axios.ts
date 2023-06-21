import axios, { CreateAxiosDefaults } from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: true,
} as unknown as CreateAxiosDefaults);

export default instance;
