import React from "react";
import { useQuery } from "@apollo/client";
import ViewReportPresenter from "./ViewReportPresenter";


export default (props:any) => {
    const result : any = props.match.params;
    const rId = result.report_id;


    
    return <ViewReportPresenter
    />
}