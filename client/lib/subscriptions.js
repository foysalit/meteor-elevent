Meteor.subscribe('events');
Meteor.subscribe('eventById');
Meteor.subscribe('tags');

Events = new Meteor.Collection('events');
Tags = new Meteor.Collection('tags');

