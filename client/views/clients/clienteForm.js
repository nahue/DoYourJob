Template.clienteForm.helpers({
  'companies': function () {
    return Companies.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  'client_id': function() {
   return Session.get('editClientId');
  }
});

Template.clienteForm.events({
  'submit form': function (e, template) {
    Events.handleNaturally(e);

    var name = template.find('#name').value;
    var company_id = template.find('select[name=company] option:selected').value;

    if (this.crear) {
      Meteor.call('addClient', {
        name: name,
        company_id: company_id
      }, function (err, data) {
        if (err)
          console.log(err);
        template.find('#name').value = "";
        template.find('select[name=company]').value = "";
      });
    }

    if (this.editar) {
     Meteor.call('editClient', {
       _id: template.find("input[name=client_id]").value,
       name: name,
       company_id: company_id
     });
      $('#editarCliente').modal('hide');
    }



  },
});

Template.clienteForm.rendered = function () {


  var form = $(this.find('form'));

  form
    .form({
      name: {
        identifier: 'name',
        rules: [
          {
            type: 'empty',
            prompt: 'Por favor ingrese el titulo.'
                  }
              ]
      }
    });
}
