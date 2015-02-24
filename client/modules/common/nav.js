Template.MainNavigation.helpers({
	'pageTitle': function () {
		return Session.get('pageTitle');
	},
	'items': function () {
		return Session.get('leftMenuItems');
	}
})