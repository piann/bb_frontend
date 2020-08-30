import React from "react";
import ProgramListPresenter from "./ProgramListPresenter";
import {GET_PROGRAM_LIST} from "./ProgramListQueries";
import { useQuery } from "@apollo/client";

export default () => {

    const {data, loading} = useQuery(GET_PROGRAM_LIST)
    
    if(!loading){
        const {
            getProgramList:programInfoList
        } = data;

        return <ProgramListPresenter
        loading={loading}
        programInfoList={programInfoList}
        />;
    } 

    return <ProgramListPresenter
    loading={loading}
    />;


}