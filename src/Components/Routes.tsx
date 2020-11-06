// eslint-disable-next-line 
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Proptypes from "prop-types";
import React from "react";
import LogIn from "../Routes/LogIn";
import SignUp from "../Routes/SignUp";
import RegisterBusiness from "../Routes/RegisterBusiness";
import BBP from "../Routes/BBP";
import Report from "../Routes/Report";
import BBPProgress from "../Routes/BBPProgress";
import BBPNotice from "../Routes/BBPNotice";
import Profile from "../Routes/Profile";
import ReportThread from "../Routes/ReportThread"
import ConfirmSecret from "../Routes/ConfirmSecret";
import Introduction from "../Routes/Introduction";
import ProgramList from "../Routes/ProgramList";
import EmailResend from "../Routes/EmailResend";
import ViewReport from "../Routes/ViewReport";
import Privacy from "../Routes/Privacy";
import TermsOfServices from "../Routes/TermsOfServices";
import Admin from "../Routes/Admin";
import ResetPasswordBySecret from "../Routes/ResetPasswordBySecret";
import SendPasswordResetEmail from "../Routes/SendPasswordResetEmail";
import EditPassword from "../Routes/EditPassword";

const LoggedInRoutes = () => <Switch>
<Route exact path="/" component={Introduction}/>
<Route exact path="/introduction" component={Introduction}/>
<Route exact path="/privacy" component={Privacy}></Route>
<Route exact path="/terms_of_service" component={TermsOfServices}></Route>
<Route exact path="/log_in" component={LogIn}/>
<Route exact path="/profile" component={Profile}></Route>
<Route exact path="/edit_password" component={EditPassword}/>
<Route exact path="/programs" component={ProgramList}></Route>
{/*<Route exact path="/upload" component={UploadTest}></Route>*/}
<Route exact path="/view_report/:report_id" component={ViewReport}></Route>
<Route exact path="/report_thread/:report_id" component={ReportThread}></Route>
<Route exact path="/orchestration" component={Admin}></Route>
<Route exact path="/:name_id" component={BBP}></Route>
<Route exact path="/:name_id/report" component={Report}></Route>
<Route exact path="/:name_id/notice" component={BBPNotice}></Route>
<Route exact path="/:name_id/progress" component={BBPProgress}></Route>
<Redirect from="*" to="/introduction" />
</Switch>

const LoggedOutRoutes = () => <Switch>
<Route exact path="/" component={Introduction}/>
<Route exact path="/introduction" component={Introduction}/>
<Route exact path="/privacy" component={Privacy}></Route>
<Route exact path="/terms_of_service" component={TermsOfServices}></Route>
<Route exact path="/log_in" component={LogIn}></Route>
<Route exact path="/sign_up" component={SignUp}></Route>
<Route exact path="/register_business" component={RegisterBusiness}></Route>
<Route exact path="/programs" component={ProgramList}></Route>
<Route exact path="/reauth" component={EmailResend}></Route>
<Route exact path="/find_password" component={SendPasswordResetEmail}></Route>
<Route path='/confirm_secret/:key' component={ConfirmSecret}></Route>
<Route path='/reset_password/:key' component={ResetPasswordBySecret}></Route>
<Route exact path="/:name_id" component={BBP}></Route>
<Route exact path="/:name_id/notice" component={BBPNotice}></Route>
<Route exact path="/:name_id/report"><Redirect to="/log_in"/></Route>

<Redirect from="*" to="/" />
</Switch>


interface Props{
    isLoggedIn:boolean;
}

const AppRouter:React.SFC<Props> = ({isLoggedIn}) =>{
    return(isLoggedIn? <LoggedInRoutes /> : <LoggedOutRoutes /> )
} 



AppRouter.propTypes = {
    isLoggedIn: Proptypes.bool.isRequired
}

export default AppRouter;