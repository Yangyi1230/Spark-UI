const techCollection = new Mongo.Collection("Tech");
const languageCollection = new Mongo.Collection("LangCombined");
const issueCollection = new Mongo.Collection("NumIssue");
const prCollection = new Mongo.Collection("NumPR");
const postCollection = new Mongo.Collection("NumPost");
const pushCollection = new Mongo.Collection("NumPush");
const starCollection = new Mongo.Collection("NumStar");

export {
    techCollection,
    languageCollection,
    issueCollection,
    prCollection,
    postCollection,
    pushCollection,
    starCollection
};