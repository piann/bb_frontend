import {gql} from "apollo-boost";

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const SIGN_IN = gql`
    mutation signIn(
    $email: String!
    $password: String!
    ){
        signIn(
            email:$email
            password:$password
        ){
            ok
            token
            error
        }
    }

`;