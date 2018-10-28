import React from "react";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: new createHttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
export default Root;
