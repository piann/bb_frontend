import React from "react";
import NoticePresenter from "./NoticePresenter";


export default (props:any) => {
    const result : any = props.match.params;
    const nameId = result.name_id;
    return <NoticePresenter 
    nameId={nameId}
    />;
}