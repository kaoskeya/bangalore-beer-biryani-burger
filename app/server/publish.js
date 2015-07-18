/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish("restaurants", function() {
	return Restaurant.find()
});

Meteor.publishComposite("items", function(filter) {
	return {
		find: function() {
			filter.approved = true;
			return Item.find( filter, { fields: { voters: 0, addedBy: 0 } } );
		},
		children: [
			{
				find: function( item ) {

				}
			}
		]
	}
});