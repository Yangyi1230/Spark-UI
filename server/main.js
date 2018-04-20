//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    const languages = new Mongo.Collection("output");
    languages.insert({time: '2014-3', language: 'emacs', score: 1});
    Meteor.publish('languages', function () {
        return languages.find();
    });
});
