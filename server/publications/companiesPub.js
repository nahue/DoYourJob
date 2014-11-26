Meteor.publish('Companies', function () {
  return Companies.find({user_id: this.userId});
});
