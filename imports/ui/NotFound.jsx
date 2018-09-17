import React from "react";
import {Link} from "react-router-dom";

export default NotFound = () => {
    return (
    	<div className="boxed-view">
    		<div className="boxed-view__box">
    			<h1> Page Not Found </h1>
		    	<p> we 're unable to find the page </p>
		    	<Link className="button button__link" to="/"> Head Home </Link>
    		</div>
    	</div>
    );
};