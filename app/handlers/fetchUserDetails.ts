import axios from "axios";
import { User } from "../types/User";

axios.defaults.baseURL = process.env.BASE_URL;

export const fetchUserDetails = async () => {
  const response = await axios.get<User>("/user");

  return response.data;
};
