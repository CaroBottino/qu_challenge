import axios from "axios";
//import "dotenv";

//const BASE_URL: string = import.meta.env.SWAPI_BASE_URL;
const BASE_URL: string = "https://swapi.dev/api";

export default {
  getPlanets(): Promise<any> {
    return axios.get<any>(`${BASE_URL}/planets`);
  },
};
