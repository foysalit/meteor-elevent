Template.EventsCreate.events({
	'submit #create_event': function (e, tpl) {
		e.preventDefault();
		var $form = $(this),
			$title = $(tpl.find('input[name="title"]')),
			$tags = $('input[name="tags"]:checked'),
			$startDate = $('input[name="start_date"]').pickadate('picker'),
			$endDate = $('input[name="end_date"]').pickadate('picker'),
			$startTime = $('input[name="start_time"]').pickadate('picker'),
			$endTime = $('input[name="end_time"]').pickadate('picker'),
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

		if ($start)

		return;
		Meteor.call('eventCreate', data, function (err, response) {
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
});

Template.EventsCreate.rendered = function () {
	$('.datepicker').pickadate({
		onSet: function () {
			
		}
	});
	$('.timepicker').pickatime();
};