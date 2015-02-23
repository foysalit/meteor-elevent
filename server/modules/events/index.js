var Events = new Meteor.Collection('events');

Meteor.publish('events', function () {
	var events = Events.find({});
	return events;
});

Meteor.methods({
	'createEvent': function (event) {
		//return console.log(event);
		Events.insert(event);
		return true;	
	}
});