// import { gqlClient } from "../config/services";
// import query from "./graphql/moviesQuery.graphql";

class CountriesService {
  constructor() {
    this.response = [];
  }

  async getCountries() {
    this.response = await Promise.resolve("query");
    return this.response?.countries;
  }
}

export default CountriesService;
