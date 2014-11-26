Router.route('companies');
Router.route('companies/:_id/edit', {
    name: 'editCompany',
    data: function() { return Companies.findOne(this.params._id)}
});
