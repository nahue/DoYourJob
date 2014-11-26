Template['login'].helpers({
});

Template.login.events({

    'submit #login-form' : function(e, t){
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#login-email').value
            , password = t.find('#login-password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
            if (err){
              console.log(err);
                //Flash.danger(err.message);
                //$.UIkit.notify(err.reason, {timeout:0,pos:'top-center',status:'danger'});
            }
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else{
                Router.go('/');
            }
            // The user has been logged in.
        });
        return false;
    }
});

Template.login.rendered = function() {
  if (Meteor.userId())
    Router.go('/');
};
