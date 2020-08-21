import {gql} from "apollo-boost";

export const IS_EMAIL_DUPLICATED = gql`
    query isEmailDuplicated(
    $email: String!
    ){
        isEmailDuplicated(
            email:$email
        )
    }
`;

export const IS_NICKNAME_DUPLICATED = gql`
    query isNickNameDuplicated(
    $nickName: String!
    ){
        isNickNameDuplicated(
            nickName:$nickName
        )
    }

`;

export const REGISTER_ACCOUNT = gql`
    mutation registerAccount(
    $realName: String
    $nickName: String!
    $password: String!
    $email: String!
    $phoneNumber: String
    ){
        registerAccount(
            realName:$realName
            nickName:$nickName
            password:$password
            email:$email
            phoneNumber:$phoneNumber
        )
    }

`;