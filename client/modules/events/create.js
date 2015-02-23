Template.EventsCreate.events({
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

		Meteor.call('createEvent', data, function (err, response) {
			if (!err) {
				Router.go('/events');
			}
		});
	}
});

Template.EventsCreate.helpers({
	'tags': function () {
		return Tags.find();
	}
})