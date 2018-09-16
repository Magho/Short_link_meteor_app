import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';

export default class AddLinks extends Component {
	
    constructor (props) {
        super(props);
        this.state = {
            url : ''
        };
    }

	handleSubmit (e) {
        const url = this.state.url;
        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url , (err, res) => {
                if(!err) {
                    this.setState({url : ''});
                }
            });
        }
    }

    onChange (e) {
        this.setState({
            url : e.target.value.trim()
        });
    }

	render() {
		return (
			<div>
				<p> Add A link :</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type={"text"}
                        placeholder={"URL"}
                        value={this.state.url}
                        onChange={this.onChange.bind(this)}
                    />
                    <button>Add link</button>
                </form>
			</div>
		);
	}
}
