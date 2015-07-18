/*****************************************************************************/
/* Admin: Event Handlers */
/*****************************************************************************/
Template.Admin.events({
});

/*****************************************************************************/
/* Admin: Helpers */
/*****************************************************************************/
Template.Admin.helpers({
});

/*****************************************************************************/
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.created = function () {
};

Template.Admin.rendered = function () {
};

Template.Admin.destroyed = function () {
};


Template.AdminAddItem.created = function () {
	this.subscribe("restaurants");
};

Template.AdminAddItem.helpers({
	restaurantList: function() {
		return Restaurant.find().map(function(r){
			return { label: r.name , value: r._id };
		});
	}
});
