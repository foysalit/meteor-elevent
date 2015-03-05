var Events = new Meteor.Collection('events');

Meteor.publish('events', function () {
	var events = Events.find({});
	return events;
});

Meteor.methods({
	'eventCreate': function (event) {
		//return console.log(event);
		Events.insert(event);
		return true;	
	},
	'eventRemove': function (event) {
		//return console.log(event);
		Events.remove(event);
		return true;	
	}
});