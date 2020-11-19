import { doGet } from "./apiService";

//const apiKey = process.env.API_KEY;
const baseUrl = "https://api.thecatapi.com";
const serviceUrl = "/v1/images/search";

export const getRandomCatImage = () => {
  return doGet(baseUrl, serviceUrl);
};
