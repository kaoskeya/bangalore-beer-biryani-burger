Restaurant = new Mongo.Collection('restaurant');

Restaurant.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  location: {
    type: Object
  },
  "location.coordinates" : {
    type: [Number],
    decimal: true
  },
  "location.type" : {
    type: String,
    defaultValue: "Point"
  }
}));

if (Meteor.isServer) {
  Restaurant.allow({
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

  Restaurant.deny({
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
