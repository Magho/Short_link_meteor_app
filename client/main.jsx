import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {   Redirect, BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
// Get the current location.
const history = createHistory();

import {Tracker} from "meteor/tracker";
import Sign_up from "../imports/ui/Sign_up";
import Links from "../imports/ui/Links";
import Login from "../imports/ui/Login";
import NotFound from "../imports/ui/NotFound";

const unAuthenticatedPages = ['/', '/Sign_up'];
const authenticatedPages = ['/Links'];



Tracker.autorun(() => {

    const routes = (
        <Router>
            <Switch>
                <Route exact path="/" render={() => (Meteor.userId() ? <Redirect to={{
                        pathname: "/Links",
                    }}/> : <Login/>)}/>
                <Route path="/Links" render={() =>  (Meteor.userId() ? <Links/> : <Redirect to={{
                    pathname: "/",
                }}/>)}/>
                <Route path="/Sign_up" component={Sign_up}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );

    const isAuthenticated = !!Meteor.userId();
    const location = history.location.pathname;


    const isUnAuthenticatedpage = unAuthenticatedPages.includes(location.toString());
    const isAuthenticatedpage = authenticatedPages.includes(location.toString());

    console.log(location);
    console.log("isAuthenticated", isAuthenticated);

    if (isUnAuthenticatedpage && isAuthenticated) {
        history.replace('/Links');
    } else if (isAuthenticatedpage && !isAuthenticated   ) {
        history.replace('/');
    }

    Meteor.startup(() => {
        ReactDom.render(routes , document.getElementById('app'));
    });
});

