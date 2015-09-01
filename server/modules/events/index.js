Meteor.publish('events', function () {
	var events = Events.find({});
	return events;
});

Meteor.publish('eventById', function (id) {
	var cursors = [],
		events = Events.find({_id: id});

	cursors.push(events);

	if (events && events.tags)
		cursors.push(Tags.find({_id: {$in: events.tags}}));

	return cursors;
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