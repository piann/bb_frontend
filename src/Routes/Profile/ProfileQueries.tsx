import {gql} from "apollo-boost";

export const GET_MY_PROFILE = gql`
query getMyProfile{
    getMyProfile{
        email
        nickName
        profilePictureId
        credit
        numOfVul
        reportInfoList{
            reportId
            status
            result
            companyName
            submitDate
            vulName
        }
    }
}
`;
