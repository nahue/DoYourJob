Template.register.events({
    'submit #register-form' : function(e, t) {
        e.preventDefault();
        var email = t.find('#account-email').value
            , password = t.find('#account-password').value;

        // Trim and validate the input

        Accounts.createUser({email: email, password : password}, function(err){
            if (err) {
                // Inform the user that account creation failed
            } else {
                Router.go('/');
            }

        });

        return false;
    }
});


Template.register.rendered = function() {
  if (Meteor.userId()) Router.go('/');
}
