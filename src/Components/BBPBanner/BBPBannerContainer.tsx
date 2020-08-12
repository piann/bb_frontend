import React from "react";
import BBPBannerPresenter from "./BBPBannerPresenter";

interface Props{
    hideButton?:boolean;
}
const BBPBannerContainer:React.SFC<Props> = ({
    hideButton
}) => <BBPBannerPresenter
        hideButton={hideButton}  
      />


export default BBPBannerContainer;