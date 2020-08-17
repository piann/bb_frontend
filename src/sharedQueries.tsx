import { gql } from "@apollo/client";

export const LOCAL_LOGGED_IN_QUERY = gql`
{
  isLoggedIn @client
}
`;