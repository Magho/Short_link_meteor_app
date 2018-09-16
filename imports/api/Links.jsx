import {Meteor} from 'meteor/meteor';
import {Mongo} from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const LinksAPI = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('LinksAPI', function() {
        return LinksAPI.find({userId : this.userId});
    });
}

Meteor.methods({
    'links.insert'(url) {
        if (!this.userId){
            throw new Meteor.Error('not Authorized');
        }
        
        new SimpleSchema({
            url : {
                type  : String,
                label : 'Your link', 
                regEx : SimpleSchema.RegEx.Url
            }
        }).validate({url});


        LinksAPI.insert({
            url,
            userId : this.userId,
        })
    }
});