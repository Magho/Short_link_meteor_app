import React from "react";
import { Link } from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export default class Links extends React.Component {

    logout() {
        Accounts.logout();
    }

    render() {
        return(
            <div>
                <p> Link component here </p>
                <Link to="/" onClick={this.logout.bind(this)}>logout</Link>
            </div>
        )
    }
}