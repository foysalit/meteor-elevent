var Tags = new Meteor.Collection('tags');

Meteor.publish('tags', function () {
	var tags = Tags.find({});
	return tags;
});

Meteor.methods({
	'createTag': function (tag) {
		Tags.insert(tag);
		return true;	
	}
});