import React, { Component } from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default PrivateHeader = (props) => {

	return (
		<div>
			<h1> {props.title} </h1>
            <button> <Link to="/" onClick={() => Accounts.logout()}>logout</Link> </button>
		</div>
	);
};

PrivateHeader.propTypes = {
	title : PropTypes.string.isRequired
}
