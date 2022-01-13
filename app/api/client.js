import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.20.4:9000/api/",
});

export default apiClient;
