import React from "react";
import LinkList from "./LinksList";
import {Meteor} from 'meteor/meteor';

import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLinks';
import LinksListFilters from './LinksListFilters';

export default () => {

    return(
        <div>
            <PrivateHeader title = "Your Links"/>
            <LinksListFilters />
            <LinkList/>
            <AddLinks/>
        </div>
    );
};