Template.MainLayout.onRendered(function () {
	var menuItems = [
		{
			title: 'Events',
			url: '/events'
		}
	];

	Session.set('leftMenuItems', menuItems);
});