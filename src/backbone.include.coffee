# Backbone.Include
# https://github.com/anthonyshort/backbone.include
#
# Copyright (c) 2012 Anthony Short
# Licensed under the MIT license.

Backbone.Model.include = Backbone.Collection.include = Backbone.View.include = Backbone.Router.include = (obj) ->
  for key, value of obj when key not in ['included']
    if not @::[key] then @::[key] = value
  obj.included?.apply(this)
  @
