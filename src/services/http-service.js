import axios from "axios";
import Storage from "./storage.js";

let token = Storage.getData("token");
let headers = {};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const httpClient = axios.create({
  baseURL: "http://127.0.0.1:8001/api",
  headers: headers
});

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status == 401) {
      Storage.removeData("token");
      location.href = "/login";
      return;
    }

    return Promise.reject(error);
  }
);

export default {
  get(uri) {
    return httpClient.get(uri);
  },
  post(uri, data) {
    let dataParsed = this.parseData(data);

    return httpClient.post(uri, dataParsed, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  },
  put(uri, data) {
    let dataParsed = this.parseData(data);

    return httpClient.put(uri, dataParsed, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  },
  parseData(data) {
    let dataParsed = new URLSearchParams();

    for (let d in data) {
      dataParsed.append(d, data[d]);
    }

    return dataParsed;
  }
};
