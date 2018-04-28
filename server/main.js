//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu
import {Meteor} from 'meteor/meteor';


//TODO: load data from local mongodb
Meteor.startup(() => {
    const technology = new Mongo.Collection("Tech");
    Meteor.publish('techTable', function () {
        return technology.find();
    });
});
