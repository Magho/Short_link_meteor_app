import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import Sign_up from "../imports/ui/Sign_up";
import Links from "../imports/ui/Links";
import Login from "../imports/ui/Login";
import NotFound from "../imports/ui/NotFound";


const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Links" component={Links}/>
            <Route path="/Sign_up" component={Sign_up}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

Meteor.startup(() => {
    ReactDom.render(routes , document.getElementById('app'));
});