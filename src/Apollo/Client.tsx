import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://172.31.5.94:4001/",
  credentials:'same-origin',
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});