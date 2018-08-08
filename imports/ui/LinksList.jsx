import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Tracker} from 'meteor/tracker';
import {LinksAPI} from "../api/Links";

export default class LinkList extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            links : []
        };
    }

        componentDidMount () {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('LinksAPI');
            const links = LinksAPI.find().fetch();
            this.setState({links});
        });
    }

    componentWillUnmount () {
        this.linksTracker.stop();
    }

    renderLinks () {
        return this.state.links.map((link) => {
            return <p key={link._id}> {link.url} </p>
        });
    }

    render() {
        return(
            <div>
                <p>Link List</p>
                {this.renderLinks()}
            </div>
        );
    }
}