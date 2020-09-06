import {gql} from "apollo-boost";

export const GET_PROGRAM_LIST= gql`
    query getProgramList{
        getProgramList{
            logoId
            companyName
            nameId
            description
            inScopeTypeList
            bountyMin
            bountyMax
            managedBy
        }
    }

`;