/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #login': function() {
		Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
	},
	'click #logout': function() {
		Meteor.logout();
	},
	'click .lick': function(e) {
		var self = this;
		if( Meteor.userId() ) {
			Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
		} else {
			Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] }, function(error){
				if( !error ) {
					if( _.indexOf( Meteor.user().profile.licks, self._id ) == -1 ) {
						Meteor.users.update({ _id: Meteor.userId() }, { $push: { "profile.licks": self._id } });
					} else {
						console.log("Already licked");
					}
				}
			});
		}
	},
	'click .unlick': function(e) {
		var self = this;
		if( Meteor.userId() ) {
			Meteor.users.update({ _id: Meteor.userId() }, { $pull: { "profile.licks": self._id } });
		} else {
			Meteor.loginWithFacebook({ loginStyle: "popup", requestPermissions: [ "public_profile", "email", "user_friends" ] });
		}
	},
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	items: function() {
		return Item.find()
	},
	jsonMe: function() {
		return JSON.stringify( this, false, 4 );
	},
	licked: function() {
		if( Meteor.user() )
			return _.indexOf( Meteor.user().profile.licks, this._id ) != -1;
		else
			return false;
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
	var instance = this;
	this.subscribe("items", { type: "Burger" });
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
