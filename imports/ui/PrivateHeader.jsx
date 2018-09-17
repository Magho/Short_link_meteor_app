import React, { Component } from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default PrivateHeader = (props) => {

	return (
		<div className="header">
			<div className="header__content">
				<h1 className="header__title"> {props.title} </h1>
	            <button className="button button__link-text"> <Link style={{color:'white'}}to="/" onClick={() => Accounts.logout()}>logout</Link> </button>
			</div>
		</div>
	);
};

PrivateHeader.propTypes = {
	title : PropTypes.string.isRequired
}
