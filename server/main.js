import {Meteor} from 'meteor/meteor';
import {WepApp} from 'meteor/webapp';

import "../imports/api/users";
import { LinksAPI } from "../imports/api/Links";
import '../imports/startup/simple_schema_config';

Meteor.startup(( )=> {
	WebApp.connectHandlers.use((req, res, next) => {
		const _id = req.url.slice(1);
		const link = LinksAPI.findOne({ _id });

		if (link) {
			res.statusCode = 302;
			res.setHeader('Location', link.url);
			res.end();
		} else {
			next();
		}
	});
});
