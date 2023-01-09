export const baseUrl =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_SERVER_NEST
    : import.meta.env.VITE_SEVER_URL;
