Template['editCompany'].events({
    'submit form': {

    }
});
Template['editCompany'].rendered = function () {
    $('#companiesForm').data("operacion", "editar");
    $('#title').val(this.data.title);
};
