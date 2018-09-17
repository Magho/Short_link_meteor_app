import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLinks extends Component {
	
    constructor (props) {
        super(props);
        this.state = {
            url : '',
            isOpen : false,
            error:''
        };
    }

	handleSubmit (e) {
        const url = this.state.url;
        e.preventDefault();

        Meteor.call('links.insert', url , (err, res) => {
            if(!err) {
                this.handleModelClose();
            } else {
                this.setState({error : err.reason});
            }
        });
    }

    onChange (e) {
        this.setState({
            url : e.target.value.trim()
        });
    }

    handleModelClose () {
        this.setState({
            isOpen:false,
            url:'',
            error:''
        });
    }

	render() {
		return (
			<div>
                <button className="button" onClick= {() => this.setState({isOpen:true})}>+ Add Link</button>
				<Modal
                    isOpen={this.state.isOpen}
                    contentLabel="Add link"
                    onAfterOpen={() => this.refs.url.focus()}
                    onRequestClose={this.handleModelClose.bind(this)}
                >
                    <h1> Add A link :</h1>
                    {this.state.error ? <p>{this.state.error}</p>: undefined }
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input
                            type={"text"}
                            placeholder={"URL"}
                            ref="url"
                            value={this.state.url}
                            onChange={this.onChange.bind(this)}
                        />
                        <button>Add link</button>
                    </form>
                    <button onClick= {this.handleModelClose.bind(this)}> cancel </button>          
                </Modal>
			</div>
		);
	}
}
