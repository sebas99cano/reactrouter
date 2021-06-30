import React from 'react';
import UseAuth from "../auth/UseAuth";
import {useHistory, useLocation} from "react-router-dom";

const LoginPage = () => {

    const auth = UseAuth();
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;

    console.log(location)

    const handleLogin = () =>{
        auth.login();
        history.push(previusObjectURL || "/dashboard");
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>SignIn</button>
        </div>
    );
};

export default LoginPage;
