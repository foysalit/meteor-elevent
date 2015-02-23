Template.Tags.helpers({
	'tags': function () {
		return Tags.find({});
	}
});

Router.route('/tags', function () {
	this.render('Tags');
});

Router.route('/tags/create', function () {
	this.render('TagsCreate');
});