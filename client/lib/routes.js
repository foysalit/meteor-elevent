Router.configure({
  layoutTemplate: 'MainLayout',
});

Router.route('/', {
	name: 'home',
	layout: 'Home',
	action: function () {
		Session.set('pageTitle', "Home");
		this.render();
	}
});