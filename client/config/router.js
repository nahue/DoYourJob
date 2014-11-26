Router.configure({
  layoutTemplate: 'basicLayout'
});

Router.route('/login', function(){
  this.layout('loginLayout');
  this.render('login');
});

Router.route('/register', function(){
  this.layout('loginLayout');
  this.render('register');
});

Router.onBeforeAction(function(){
  if (!Meteor.userId())
  {
    this.redirect('/login');
  } else {
    this.next();
  }
},{except: ['login','register']});
