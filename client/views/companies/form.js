Template.companiesForm.events({
    'submit form': function(e, template) {
        Events.handleNaturally(e);
        var operacion = $(template.find('form')).data('operacion');
        switch (operacion) {
            case "crear":
                var title = template.find('#title').value;
                Meteor.call('setCompany', title, function(err, data){
                  if (err)
                    console.log(err);
                  template.find('#title').value = "";
                });
                break;
            case "editar":
                var title = template.find('#title').value;
                Meteor.call('editCompany', {
                    _id: this._id,
                    title: title
                });
                Router.go('companies');
                break;
        }
    },
    'click #toggleAddCompanyModal': function() {
      $('#addCompanyModal').modal('show');
    }
});

Template.companiesForm.rendered = function() {
  var form = $('.ui.form');
  form
      .form({
          title: {
              identifier: 'title',
              rules: [
                  {
                      type  : 'empty',
                      prompt: 'Por favor ingrese el titulo.'
                  }
              ]
          }
      });
  form.find('input[type=submit]').popup();
};
