Template.TagsCreate.events({
	'submit #create_tag': function (e) {
		e.preventDefault();
		var $form = $(this),
			$title = $('input[name="title"]');

		if ($title.val().length <= 0) {
			return;
		}

		Meteor.call('createTag', {title: $title.val()}, function (err, response) {
			if (!err) {
				Router.go('/tags');
			}
		});
	}
});