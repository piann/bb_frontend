import {gql} from "apollo-boost";

export const SEND_EMAIL_BUSINESS_ACCOUNT = gql`
    mutation sendBusinessMail(
    $email: String!
    $realName: String
    $companyName: String!
    $jobTitle: String
    $phone: String
    ){
        sendBusinessMail(
            email:$email
            realName: $realName
            companyName: $companyName
            jobTitle: $jobTitle
            phone: $phone
        )
    }
`;