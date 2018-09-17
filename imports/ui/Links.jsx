import React from "react";

import LinkList from "./LinksList";
import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLinks';
import LinksListFilters from './LinksListFilters';

export default () => {

    return(
        <div>
            <PrivateHeader title = "Your Links"/>
            <div className="page-content">
	           	<LinksListFilters />
	            <AddLinks/>
	            <LinkList/>
            </div>
        </div>
    );
};