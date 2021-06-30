import React from 'react';
import {Route, Redirect, useLocation} from "react-router-dom";
import UseAuth from "../auth/UseAuth";


const PrivateRoute = ({component: Component, ...rest}) => {

    const auth = UseAuth();
    const location = useLocation();

    return (
        <Route {...rest} >
            {auth.isLogged() ? <Component/> : <Redirect to={{pathname: "/login", state:{from: location}}}/>}
        </Route>
    );
};

export default PrivateRoute;
