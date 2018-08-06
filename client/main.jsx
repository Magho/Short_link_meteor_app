import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import Sign_up from "../imports/ui/Sign_up";
import Link from "../imports/ui/Link";
import Login from "../imports/ui/Login";
import NotFound from "../imports/ui/NotFound";


const routes = (
    <Router>
        <Switch>
            <Route path="/Link" component={Link}/>
            <Route path="/Sign_up" component={Sign_up}/>
            <Route path="/Login" component={Login}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);

Meteor.startup(() => {
    ReactDom.render(routes , document.getElementById('app'));
});