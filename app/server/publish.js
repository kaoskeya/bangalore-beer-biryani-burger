/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish("restaurants", function() {
	return Restaurant.find()
});