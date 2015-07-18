Review = new Mongo.Collection('review');

Review.attachSchema(new SimpleSchema({
  review: {
    type: String
  },
  user: {
    type: String
  }
}));


if (Meteor.isServer) {
  Review.allow({
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

  Review.deny({
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
