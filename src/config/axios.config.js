import axios from 'axios';
//
import { API_URL } from "./constants";

export const setupAxios = () => {
  axios.defaults.baseURL = API_URL;
}

