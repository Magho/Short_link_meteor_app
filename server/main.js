import {Meteor} from 'meteor/meteor';
import "../imports/api/users";
import "../imports/api/Links";
import '../imports/startup/simple_schema_config';
import { WebApp } from 'meteor/webapp';

Meteor.startup(( )=> {
    webApp.connectHandlers.use((req, res, next) => {
        console.log("this is from custome middle ware");
        console.log(req);

        // set HTTP status code
        res.statusCode = 404;
        // set HTTP headers
        res.setHeader('my-custome-header','Magho is great');
        // set HTTP body
        res.write('<h1> this is a </h1>');
        // set HTTP request
        res.end();

        next();
    });
});
