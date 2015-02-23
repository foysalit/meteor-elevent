Template.Events.helpers({
	'events': function () {
		return Events.find({});
	}
});

Router.route('/events', function () {
	this.render('Events');
});

Router.route('/events/create', function () {
	this.render('EventsCreate');
});