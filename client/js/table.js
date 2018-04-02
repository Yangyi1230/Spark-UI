//Author: Hao Chen


import {Mongo} from 'meteor/mongo'


//TODO load data dynamically
Template.Table.helpers({
        settings: function () {
            const collection = new Mongo.Collection(null);
            collection.insert({
                "id": 0,
                "name": "Item 0",
                "price": "$0",
                "amount": 3
            });
            collection.insert({
                "id": 1,
                "name": "Item 1",
                "price": "$1",
                "amount": 4
            });
            collection.insert({
                "id": 2,
                "name": "Item 2",
                "price": "$2",
                "amount": 8
            });
            collection.insert({
                "id": 3,
                "name": "Item 3",
                "price": "$3",
                "amount": 2
            });
            collection.insert({
                "id": 4,
                "name": "Item 4",
                "price": "$4",
                "amount": 90
            });
            collection.insert({
                "id": 5,
                "name": "Item 5",
                "price": "$5",
                "amount": 2
            });
            collection.insert({
                "id": 6,
                "name": "Item 6",
                "price": "$6",
                "amount": 3
            });
            return {
                collection: collection,
                rowsPerPage: 10,
                showFilter: false,
                fields: [
                    {key: 'id', label: 'Id'},
                    {key: 'name', label: 'Name'},
                    {key: 'price', label: 'Price'},
                    {key: 'amount', label: 'Amount'}
                ]
            }
        }
    }
);