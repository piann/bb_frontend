import {gql} from "apollo-boost";

export const GET_MY_PROFILE = gql`
query getMyProfile{
    getMyProfile{
        role
        email
        nickName
        profilePictureId
        credit
        numOfVul
        cNameId
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
