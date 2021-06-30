import React from 'react';
import {Route, Redirect} from "react-router-dom";
import UseAuth from "../auth/UseAuth";


const PublicRoute = ({component: Component, ...rest}) => {

    const auth = UseAuth();

    return (
        <Route {...rest} >
            {!auth.isLogged() ? <Component/> : <Redirect to="/dashboard"/>}
        </Route>
    );
};

export default PublicRoute;
