import axios, { CreateAxiosDefaults } from "axios";

const instance = axios.create({
  baseUrl: "",
  withCredentials: true,
} as unknown as CreateAxiosDefaults);

export default instance;
