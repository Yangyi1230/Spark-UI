//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import {Meteor} from 'meteor/meteor';


//TODO: load data from local mongodb
Meteor.startup(() => {
    const languages = new Mongo.Collection("output");
    Meteor.publish('languages', function () {
        return languages.find();
    });
});
