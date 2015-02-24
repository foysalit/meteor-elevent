var Events = new Meteor.Collection('events');

Meteor.publish('events', function () {
	var events = Events.find({});
	return events;
});

Meteor.publish('eventById', function (id) {
	var events = Events.findOne({_id: id}),
		tags = Tags.find({_id: {$in: events.tags}});
	return [events, tags];
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