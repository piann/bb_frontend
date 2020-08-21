import React from "react";
import BBPBannerPresenter from "./BBPBannerPresenter";

interface Props{
    hideButton?:boolean;
    companyName?:string;
}
const BBPBannerContainer:React.SFC<Props> = ({
    hideButton,
    companyName
}) => {

    const reportCount= 120;
    const minBounty = 10000;
    const maxBounty = 500000;
    return(
        <BBPBannerPresenter
        hideButton={hideButton}
        companyName={companyName}
        reportCount={reportCount}
        minBounty={minBounty}
        maxBounty={maxBounty}
        />
    )
}

export default BBPBannerContainer;