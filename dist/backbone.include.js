/*! backbone.include - v0.1.0 - 2012-09-13
* https://github.com/anthonyshort/backbone.include
* Copyright (c) 2012 Anthony Short; Licensed MIT */

(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Backbone.Model.include = Backbone.Collection.include = Backbone.View.include = function(obj) {
    var key, value, _ref;
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
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
