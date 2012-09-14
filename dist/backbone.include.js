/*! backbone.include - v0.1.1 - 2012-09-14
* https://github.com/anthonyshort/backbone.include
* Copyright (c) 2012 Anthony Short; Licensed MIT */

(function() {

  Backbone.Model.include = Backbone.Collection.include = Backbone.View.include = module.exports = function(obj) {
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
