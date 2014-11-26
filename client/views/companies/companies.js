Template.companies.helpers({
    companies: function() {
        return Companies.find({},{sort: { created_at: -1}});
    },
    empresaSeleccionada: function() {
        return Session.get('empresaSeleccionada');
    }
});

Template.companies.events({
    'click .delete': function(e) {
        Events.handleNaturally(e);
        var companyId = this._id;
        Session.set('empresaSeleccionada', this);

        $('#confirmaEliminarEmpresa').modal({
            closable    : false,
            onApprove   : function() {
                Meteor.call('removeCompany', companyId);
            }
        }).modal('show');
    },
    'click .edit': function(e,template) {
        Events.handleNaturally(e);
        /*$('#companiesForm').find('#title').val(this.title);
        $('#companiesForm').data("operacion", "editar");
        $('#companiesForm').data('id',this._id);*/
        Router.go('editCompany', {_id: this._id});
    }

});

Template.companies.rendered = function () {
    $('#companiesForm').data("operacion", "crear");
};
