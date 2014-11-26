Meteor.publish('Clients', function () {
  return Clients.find({user_id: this.userId});
});
