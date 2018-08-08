import {Meteor} from 'meteor/meteor';
import React from 'react';
import {   Redirect, BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
// Get the current location.
const history = createHistory();

import Sign_up from "../ui/Sign_up";
import Links from "../ui/Links";
import Login from "../ui/Login";
import NotFound from "../ui/NotFound";

const unAuthenticatedPages = ['/', '/Sign_up'];
const authenticatedPages = ['/Links'];


export const routes = (
    <Router>
        <Switch>
            <Route exact path="/" render={() => (Meteor.userId() ? <Redirect to={{
                pathname: "/Links",
            }}/> : <Login/>)}/>
            <Route path="/Links" render={() =>  (Meteor.userId() ? <Links/> : <Redirect to={{
                pathname: "/",
            }}/>)}/>
            <Route path="/Sign_up" render={() => (Meteor.userId() ? <Redirect to={{
                pathname: "/Links",
            }}/> : <Sign_up/> )}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export const onAuthChange = (isAuthenticated) => {

    const location = history.location.pathname;
    const isUnAuthenticatedpage = unAuthenticatedPages.includes(location.toString());
    const isAuthenticatedpage = authenticatedPages.includes(location.toString());

    console.log(location);
    console.log("isAuthenticated", isAuthenticated);

    if (isUnAuthenticatedpage && isAuthenticated) {
        history.replace('/Links');
    } else if (isAuthenticatedpage && !isAuthenticated) {
        history.replace('/');
    }
};

