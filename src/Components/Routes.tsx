// eslint-disable-next-line 
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Proptypes from "prop-types";
import React from "react";
import LogIn from "../Routes/LogIn";
import SignUp from "../Routes/SignUp";
import BBP from "../Routes/BBP";

const LoggedInRoutes = () => <Switch>
<Route exact path="/" component={LogIn}/>
<Redirect from="*" to="/" />
</Switch>

const LoggedOutRoutes = () => <Switch>
<Route exact path="/log_in" component={LogIn}></Route>
<Route exact path="/sign_up" component={SignUp}></Route>
<Route exact path="/program" component={BBP}></Route>
<Redirect from="*" to="/log_in" />
</Switch>


interface Props{
    isLoggedIn:boolean;
}

const AppRouter:React.SFC<Props> = ({isLoggedIn}) => 
isLoggedIn? <LoggedInRoutes /> : <LoggedOutRoutes /> 



AppRouter.propTypes = {
    isLoggedIn: Proptypes.bool.isRequired
}

export default AppRouter;