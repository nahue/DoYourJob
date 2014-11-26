function loadFixture(fixtures, collection) {
  'use strict';
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  //loadFixture(Fixtures['dummyFixture'], DummyCollection);
});
