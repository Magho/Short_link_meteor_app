import {Meteor} from 'meteor/meteor';
import {Mongo} from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid  from 'shortid';

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
            _id : shortid.generate(),
            userId : this.userId,
            visible : true,
            visitedCount:0,
            lastVisitedAt:null
        })
    },
    'links.delete'(_id){
        LinksAPI.remove({_id});
    },
    'links.setVisibility'(_id, visible){
        if (!this.userId){
            throw new Meteor.Error('not Authorized');
        }

        new SimpleSchema({
            _id : {type : String, min:1},
            visible : {type : Boolean}
        }).validate({_id, visible});

        LinksAPI.update({
            _id,
            userId:this.userId
        },
        {
            $set:{ visible } 
        });
    },
    'links.trackVisit'(_id){
        new SimpleSchema({
            _id : {type : String, min:1}
        }).validate({_id});

        LinksAPI.update({_id}, {
            $set : {
                lastVisitedAt : new Date().getTime()
            },
            $inc : {
                visitedCount : 1
            }
        });
    }
});