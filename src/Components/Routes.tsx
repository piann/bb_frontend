// eslint-disable-next-line 
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Proptypes from "prop-types";
import React from "react";
import LogIn from "../Routes/LogIn/LogInPresenter";

const LoggedInRoutes = () => <Switch>
<Route exact path="/" component={LogIn}/>
<Redirect from="*" to="/" />
</Switch>

const LoggedOutRoutes = () => <Switch>
<Route exact path="/" component={LogIn}></Route>
<Redirect from="*" to="/" />
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