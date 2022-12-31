import axios from "axios";
import { Cookies } from "react-cookie";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

const cookie = new Cookies();
