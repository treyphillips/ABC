(function(){
      'use strict';

var Person = Backbone.Model.extend ({

  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
  }
});

var PersonCollection = Backbone.Collection.exted({
  url: "https://api.parse.com/1/classes/post",

});

var PersonView = Backbone.View.extend({
  tagName: 'form',
  template: _.template($('#person-template').html()),

  PersonPost: function(e) {
    e.preventDefault();
    this.collection.create({})
  }
});

})();
