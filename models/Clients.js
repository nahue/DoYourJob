Clients = new Mongo.Collection('Clients');

ClientsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Nombre"
  },
  user_id: {
    type: String,
    label: "Usuario"
  },
  company_id: {
    type: String,
    label: "Empresa"
  },
  created_at: {
    type: Date,
    denyUpdate: true,
    defaultValue: new Date()
  }
});

Clients.attachSchema(ClientsSchema);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Clients.allow({
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
    addClient: function (data) {
      check(data, Object);

      var userId = Meteor.userId();
      Clients.insert({name: data.name, user_id: userId, company_id: data.company_id, created_at: new Date()});
    },
    removeClient: function (client_id) {
      check(client_id, String);
      Clients.remove(client_id);
    },
    editClient: function (data) {
      check(data, Object);
      if (!data) return;
      //var userId = Meteor.userId();
      Clients.update({_id: data._id}, {$set: {name: data.name, company_id: data.company_id}});
    },
  });
}
