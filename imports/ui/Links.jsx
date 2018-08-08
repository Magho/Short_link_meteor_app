import React from "react";
import { Link } from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import {LinksAPI} from "../api/Links";
import LinkList from "./LinksList";

export default class Links extends React.Component {

    logout() {
        Accounts.logout();
    }

    handleSubmit (e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();

        if (url) {
            LinksAPI.insert({url});
            this.refs.url.value = '';
        }


    }
    render() {
        return(
            <div>
                <p> Link component here </p>
                <Link to="/" onClick={this.logout.bind(this)}>logout</Link>

                <p> Add A link :</p>
                <LinkList/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type={"text"} ref={"url"} placeholder={"URL"}/>
                    <button>Add link</button>
                </form>

            </div>
        )
    }
}