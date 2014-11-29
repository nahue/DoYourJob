Template.clients.helpers({
  'clients': function () {
    return Clients.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  'joinWithCompany': function () {
    var client = this;
    var company = Companies.findOne(this.company_id);
    if (company) {
      var company_title = company.title;
      return _.extend(client, {
        company: company.title
      });
    }
  },
  clienteSeleccionado: function () {
    return Session.get('clienteSeleccionado');
  }
});

Template.clients.events({
  'click .delete': function (e) {
    Events.handleNaturally(e);
    var client_id = this._id;
    Session.set('clienteSeleccionado', this.name);

    $('#confirmaEliminarCliente').modal({
      closable: false,
      onApprove: function () {
        Meteor.call('removeClient', client_id);
      }
    }).modal('show');
  },
  'click .edit': function (e) {
    Session.set('editClientId', this._id);
    var company_id = this.company_id;
    var name = this.name;
    $('#editarCliente').modal({
      onShow: function() {

        $(this).find('select[name=company] option[value=' + company_id+ ']').attr('selected','selected');
        $(this).find('#name').val(name);
      }
    }).modal('show');
  },
  'submit #formEditarCliente': function (e, template) {
    Events.handleNaturally(e);
    console.log(template);
  }
});

Template.clients.rendered = function() {

}
