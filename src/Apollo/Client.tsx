import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import {backServerAddr} from "../common";

export default new ApolloClient({
  uri: backServerAddr,
  credentials:'include', // 'same-origin',
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});