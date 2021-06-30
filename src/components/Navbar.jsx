import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import UseAuth from "../auth/UseAuth";

const Navbar = () => {

    const auth = UseAuth();

    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile/hi" activeClassName="active">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/categories" activeClassName="active">Categories</NavLink>
                </li>
                {!auth.isLogged() && (
                    <Fragment>
                        <li>
                            <NavLink exact to="/login" activeClassName="active">Login</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/register" activeClassName="active">Register</NavLink>
                        </li>
                    </Fragment>
                )}
                {auth.isLogged() && (
                    <Fragment>
                        <li>
                            <NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/payments" activeClassName="active">Payment</NavLink>
                        </li>
                        <li>
                            <button onClick={auth.logout}>
                                Logout
                            </button>
                        </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
