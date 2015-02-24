Template.Events.helpers({
	'events': function () {
		return Events.find({});
	}
});

Template.Events.events({
	'click .remove': function (e, tpl) {
		e.preventDefault();
		Meteor.call('eventRemove', this, function (err, response) {
			console.log(err, response);
		});
	}
});

Router.route('/events', {
	name: 'events',
	template: 'Events',
	action: function () {
		Session.set('pageTitle', "Events");
		this.render();
	}
});

Router.route('/events/show/:_id', {
	name: 'events.show',
	template: 'EventsShow',
	action: function () {
		Session.set('eventCurrent', this.params._id);
		this.render();
	}
});

Router.route('/events/create', {
	name: 'events.create',
	template: 'EventsCreate',
	action: function () {
		Session.set('pageTitle', "Create Event");
		this.render();
	}
});