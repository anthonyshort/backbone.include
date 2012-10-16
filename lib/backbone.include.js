(function() {

  Backbone.Model.include = Backbone.Collection.include = Backbone.View.include = Backbone.Router.include = function(obj) {
    var key, value, _ref;
    for (key in obj) {
      value = obj[key];
      if (key !== 'included') {
        if (!this.prototype[key]) {
          this.prototype[key] = value;
        }
      }
    }
    if ((_ref = obj.included) != null) {
      _ref.apply(this);
    }
    return this;
  };

}).call(this);
