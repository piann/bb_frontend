import {gql} from "apollo-boost";

export const GET_ALL_COMPANY_LOGOS = gql`
query getAllCompanyLogos{
    getAllCompanyLogos{
        id
        companyName
        nameId
        logoId
    }
}
`;
