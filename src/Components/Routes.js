// eslint-disable-next-line 
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Proptypes from "prop-types";
import React from "react";
import Dashboard from "../Routes/Dashboard";

const LoggedInRoutes = () => <Switch>
<Route exact path="/" component={Dashboard}/>
<Redirect from="*" to="/" />
</Switch>

const LoggedOutRoutes = () => <Switch>
<Route exact path="/" component={Dashboard}></Route>
<Redirect from="*" to="/" />
</Switch>



const AppRouter = ({isLoggedIn}) => 
isLoggedIn? <LoggedInRoutes /> : <LoggedOutRoutes /> 



AppRouter.propTypes = {
    isLoggedIn: Proptypes.bool.isRequired
}

export default AppRouter;