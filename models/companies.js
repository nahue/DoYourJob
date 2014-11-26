Companies = new Mongo.Collection('Companies');

CompaniesSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Nombre"
  },
  user_id: {
    type: String,
    label: "Usuario"
  },
  created_at: {
    type: Date,
    denyUpdate: true,
    defaultValue: new Date()
  }
});

Companies.attachSchema(CompaniesSchema);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Companies.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });

  Meteor.methods({
    setCompany: function (title) {
      check(title, String);
      if (!title) return;
      var userId = Meteor.userId();
      Companies.insert({title: title, user_id: userId, created_at: new Date()});
    },
    editCompany: function (data) {
      check(data, Object);
      if (!data) return;
      //var userId = Meteor.userId();
      Companies.update({_id: data._id}, {$set: {title: data.title}});
    },
    removeCompany: function (companyId) {
      check(companyId, String);
      Companies.remove(companyId);
    }
  });
}
