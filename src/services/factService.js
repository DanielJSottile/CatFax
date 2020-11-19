import { doGet } from "./apiService";

const baseUrl = "https://cat-fact.herokuapp.com";
const serviceUrl = "/facts";

export const getAllFacts = () => {
  return doGet(baseUrl, serviceUrl);
};

export const getRandomFact = () => {
  return doGet(baseUrl, `${serviceUrl}/random`);
};
