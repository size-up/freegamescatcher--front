import axios from "axios";

export class AxiosConfig {
  public static getConfig() {
    return axios.create({
      baseURL: "http://localhost:8080/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-api-key": "012345",
      },
    });
  }
}
