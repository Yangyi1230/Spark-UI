//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import {Meteor} from 'meteor/meteor';


Meteor.startup(() => {
    const techCollection = new Mongo.Collection("Tech");
    const languageCollection = new Mongo.Collection("LangCombined");
    const issueCollection = new Mongo.Collection("NumIssue");
    const prCollection = new Mongo.Collection("NumPR");
    const postCollection = new Mongo.Collection("NumPost");
    const pushCollection = new Mongo.Collection("NumPush");
    const starCollection = new Mongo.Collection("NumStar");

    Meteor.publish('techTable', function () {
        return techCollection.find();
    });
    Meteor.publish('languageTable', function () {
        return languageCollection.find();
    });
    Meteor.publish('issueTable', function () {
        return issueCollection.find();
    });
    Meteor.publish('prTable', function () {
        return prCollection.find();
    });
    Meteor.publish('postTable', function () {
        return postCollection.find();
    });
    Meteor.publish('pushTable', function () {
        return pushCollection.find();
    });
    Meteor.publish('starTable', function () {
        return starCollection.find();
    });
});
