(function(){
      'use strict';


// -------------
// Models / Collections
// -------------
var Blog = Backbone.Model.extend ({

  defaults: {
    title: '',
    body: ''
  }

});

var BlogCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/post",

  // parse: function(response) {
  //   return response.results;
  // }
});


// -------------
// Views / (Presentation / Interation)
// -------------

var BlogView = Backbone.View.extend ({
  tagName: 'form',
  template: _.template($("#blog-template").html()),


  blogPost: function(e) {
    e.preventDefault();
    this.collection.create({title: '', body: ''});
  },

  render: function() {
    $('.app-container').append(this.el);
    this.$el.append(this.template);
  },

  events: {
    'submit': 'createPost'
  }
});


// -------------
// Router / Application State
// -------------

// var AppRouter = Backbone.Router.extend({
//   routes: {
//     '': 'index'
//   },
//
//   index: function() {
//
//   }
// });


// -------------
 // Configuration
 // -------------


$.ajaxSetup({
  headers: {
    "X-Parse-Application-Id": "ISGwMKMuz27EWWzvB10p85v64I6kgCjITsl5UvI0",
    "X-Parse-REST-API-Key": "lvlMJaH5D27zppRbObUnhkajRgMJ4Ug3Lx7PwhTv"
  }
});






 // -------------
 // Glue code
 // -------------

 $(document).ready(function(){
    window.blog = new Blog();
    window.post = new BlogView({
      model: blog
    });
    post.render();
  });

})();
