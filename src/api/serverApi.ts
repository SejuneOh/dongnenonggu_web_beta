import axios from "axios";
import { Cookies } from "react-cookie";
import { baseUrl } from "../config/inedex";

export const api = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

const cookie = new Cookies();
