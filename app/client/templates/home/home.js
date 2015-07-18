/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #login': function() {
		Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
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
