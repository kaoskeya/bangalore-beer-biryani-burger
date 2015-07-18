Item = new Mongo.Collection('item');

Item.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  photos: {
    type: [String]
  },
  votes: {
    type: Number,
    defaultValue: 0
  },
  voters: {
    type: String
  },
  type: {
    type: String,
    allowedValues: [ "Beer", "Biryani", "Burger" ]
  },
  approved: {
    type: String
  },
  addedBy: {
    type: Object
  },
  "addedBy.user": {
    type: String
  },
  "addedBy.level": {
    type: String
  },
  restaurant: {
    type: Object
  },
  "restaurant.name": {
    type: String
  },
  "restaurant.location": {
    type: Object
  },
  "restaurant.location.coordinates" : {
    type: [Number],
    decimal: true
  },
  "restaurant.location.type" : {
    type: String,
    defaultValue: "Point"
  }
}));

if (Meteor.isServer) {
  Item.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Item.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
