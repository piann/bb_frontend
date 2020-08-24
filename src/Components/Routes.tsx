// eslint-disable-next-line 
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Proptypes from "prop-types";
import React from "react";
import LogIn from "../Routes/LogIn";
import SignUp from "../Routes/SignUp";
import BBP from "../Routes/BBP";
import Report from "../Routes/Report";
import BBPProgress from "../Routes/BBPProgress";
import Profile from "../Routes/Profile";
import ReportThread from "../Routes/ReportThread"
import ConfirmSecret from "../Routes/ConfirmSecret";

const LoggedInRoutes = () => <Switch>
<Route exact path="/log_in" component={LogIn}/>
<Route exact path="/profile" component={Profile}></Route>
<Route exact path="/report_thread" component={ReportThread}></Route>
<Route exact path="/:name_id" component={BBP}></Route>
<Route exact path="/:name_id/report" component={Report}></Route>
<Route exact path="/:name_id/progress" component={BBPProgress}></Route>
<Redirect from="*" to="/profile" />
</Switch>

const LoggedOutRoutes = () => <Switch>
<Route exact path="/log_in" component={LogIn}></Route>
<Route exact path="/sign_up" component={SignUp}></Route>
<Route path='/confirm_secret/:key' component={ConfirmSecret}></Route>
<Redirect from="*" to="/log_in" />
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