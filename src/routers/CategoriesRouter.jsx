import {Link, NavLink, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage";
import React from "react";
import PrivateRoute from "./PrivateRoute";

export default function categoriesRouter() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {url} = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to={`${url}`} activeClassName="active">All </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/terror`} activeClassName="active">Terror</NavLink>
                </li>
                <li>
                    <NavLink exact to={`${url}/action`} activeClassName="active">Action </NavLink>
                </li>
                <li>
                    <NavLink exact to={`${url}/anime`} activeClassName="active">Anime </NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/categories" component={CategoriesPage}/>
                <PrivateRoute path="/categories/terror" component={TerrorRouter}/>
                <Route exact path="/categories/action">
                    <h1>Action</h1>
                </Route>
                <Route exact path="/categories/anime">
                    <h1>Anime</h1>
                </Route>
                <Route path="*">
                    <Redirect to={"/404"}/>
                </Route>
            </Switch>
        </div>
    );
}

function TerrorRouter() {

    const {url} = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link  to={`${url}`} >All</Link>
                </li>
                <li>
                    <Link  to={`${url}/suspense`}>Suspense</Link>
                </li>
                <li>
                    <Link  to={`${url}/gore`}>Gore</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`}>
                    <h1>Terror</h1>
                </Route>
                <Route exact path={`${url}/gore`}>
                    <h1>Gore</h1>
                </Route>
                <Route exact path={`${url}/suspense`}>
                    <h1>Suspense</h1>
                </Route>
                <Route path="*">
                    <Redirect to={"/404"}/>
                </Route>
            </Switch>
        </div>
    )
}

