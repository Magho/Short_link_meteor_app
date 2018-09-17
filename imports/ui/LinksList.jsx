import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Tracker} from 'meteor/tracker';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';
import {LinksAPI} from "../api/Links";
import LinksListItem from './LinksListItem';

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
            const links = LinksAPI.find({
                visible : Session.get('showVisible')
            }).fetch();
            this.setState({links});
        });
    }

    componentWillUnmount () {
        this.linksTracker.stop();
    }

    renderLinks () {

        if (this.state.links.length === 0) {
            return (
                <div className="item">
                    <p className="item__status-message"> No Links Found </p>
                </div>
            );
        }

        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl = {shortUrl} {...link} />;
            //return <p key={link._id}> {link.url} </p>
        });
    }

    render() {
        return(
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderLinks()}
                </FlipMove>
            </div>
        );
    }
}