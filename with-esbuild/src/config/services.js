import { GraphQLClient } from "graphql-request";

const API_URL = "https://countries.trevorblades.com/";

export const gqlClient = (query, variables = {}) => {
  const client = new GraphQLClient(API_URL, {});
  console.log({ client, query, variables });
  return client.request(query, variables);
};
