Template['login'].helpers({
});

Template.login.events({

    'submit #login-form' : function(e, t){
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('input[name=email]').value
            , password = t.find('input[name=password]').value;

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
  $('body').removeClass('login-layout');

  if (Meteor.userId())
  {
    Router.redirect('/');
  }
  var form = $('.ui.form');
  form
      .form({
          email: {
              identifier: 'email',
              rules: [
                  {
                      type  : 'empty',
                      prompt: 'Por favor ingrese el email.'
                  }
              ]
          },
          password: {
              identifier: 'password',
              rules: [
                  {
                      type  : 'empty',
                      prompt: 'Por favor ingrese la contraseña.'
                  }
              ]
          }
      });
  form.find('input[type=submit]').popup();
};
