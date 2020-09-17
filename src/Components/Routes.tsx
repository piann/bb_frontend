// eslint-disable-next-line 
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Proptypes from "prop-types";
import React from "react";
import LogIn from "../Routes/LogIn";
import SignUp from "../Routes/SignUp";
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
import UploadTest from "../Routes/UploadTest";
import TermsOfServices from "../Routes/TermsOfServices";
import Admin from "../Routes/Admin";

const LoggedInRoutes = () => <Switch>
<Route exact path="/privacy" component={Privacy}></Route>
<Route exact path="/terms_of_service" component={TermsOfServices}></Route>
<Route exact path="/log_in" component={LogIn}/>
<Route exact path="/introduction" component={Introduction}/>
<Route exact path="/profile" component={Profile}></Route>
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
<Route exact path="/log_in" component={LogIn}></Route>
<Route exact path="/sign_up" component={SignUp}></Route>
<Route exact path="/programs" component={ProgramList}></Route>
<Route exact path="/privacy" component={Privacy}></Route>
<Route exact path="/terms_of_service" component={TermsOfServices}></Route>
<Route exact path="/reauth" component={EmailResend}></Route>
<Route path='/confirm_secret/:key' component={ConfirmSecret}></Route>
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