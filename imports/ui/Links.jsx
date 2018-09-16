import React from "react";
import LinkList from "./LinksList";
import {Meteor} from 'meteor/meteor';

import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLinks';

export default () => {

    return(
        <div>
            <PrivateHeader title = "Your Links"/>
            <LinkList/>
            <AddLinks/>
        </div>
    );
};