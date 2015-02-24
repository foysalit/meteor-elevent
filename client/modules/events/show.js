Template.EventsShow.events({
	'submit #create_event': function (e, tpl) {
		e.preventDefault();
		var $form = $(this),
			$title = $(tpl.find('input[name="title"]')),
			$tags = $('input[name="tags"]:checked'),
			tags = [];

		$tags.each(function () {
			tags.push($(this).val());
		});

		if ($title.val().length <= 0) {
			return;
		}

		var data = {
			title: $title.val(),
			tags: tags
		};

		Meteor.call('eventShow', data, function (err, response) {
			if (!err) {
				Router.go('/events');
			}
		});
	}
});

Template.EventsShow.helpers({
	'event': function () {
		var id = Session.get('eventCurrent');

		if (!id) {
			return Router.go('events');
		}
		
		var event = Events.findOne({_id: id});
		Session.set('pageTitle', event.title);
		return event;
	}
});