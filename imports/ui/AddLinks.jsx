import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';

export default class AddLinks extends Component {
	
	handleSubmit (e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url , () => {
				this.refs.url.value = '';
            });   
        }
    }

	render() {
		return (
			<div>
				<p> Add A link :</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type={"text"} ref={"url"} placeholder={"URL"}/>
                    <button>Add link</button>
                </form>
			</div>
		);
	}
}
