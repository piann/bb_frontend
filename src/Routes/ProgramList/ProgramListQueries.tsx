import {gql} from "apollo-boost";
import { useQuery } from "@apollo/client";

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