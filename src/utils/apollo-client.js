import ApolloBoost from "apollo-boost";

const Client = new ApolloBoost({
  uri: "http://localhost:3000",
});

export default Client;
