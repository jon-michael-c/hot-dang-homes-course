import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.WP_GRAPHQL_URL);
const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
