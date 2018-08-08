import {Meteor} from 'meteor/meteor';
import {Mongo} from "meteor/mongo";

export const LinksAPI = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('LinksAPI', () => {
    return LinksAPI.find();
    });
}