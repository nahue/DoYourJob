Template.header.events({
   'click .logOut': function(){
       Meteor.logout();
   }
});

Template.header.rendered = function() {
  $('.ui.dropdown').dropdown();
}
