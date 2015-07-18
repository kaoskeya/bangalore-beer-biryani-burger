/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #login': function() {
		Meteor.loginWithFacebook({ loginStyle: "popup" });
	},
	'click #logout': function() {
		Meteor.logout();
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
