# backbone.include

Extremely simple mixin interface for Backbone borrowed from SpineJS. Many Backbone extensions require you to extend their model or view. It shouldn't be this way. We shouldn't be extending the prototype chain and we shouldn't have to do any manual work for something so common. 

This extension adds a simple `include` class method to Model, Collection and View.

## Usage

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/anthonyshort/backbone.include/master/dist/backbone.include.min.js
[max]: https://raw.github.com/anthonyshort/backbone.include/master/dist/backbone.include.js

In your web page:

```html
<script src="dist/backbone.include.min.js"></script>
```

Now you can mixin objects easily.

```coffee
class Task extends Backbone.Model
  @include Validation

class TaskView extends Backbone.View
  @include EditableView
  @include CompositeView
  @include DraggableView
```

or in JS

```js
var Task = Backbone.Model.extend();
Task.include(Validation);

var TaskView = Backbone.View.extend();
TaskView.include(EditableView);
TaskView.include(CompositeView);
TaskView.include(DraggableView);
```

Now we can break apart our code and easily re-use it across projects. We can mix and match the parts we
need exactly where we need them.

But extending the prototype isn't the only thing it does. It also fires of an `included` method on the mixin
whenever it is included into an object and it is called in the context of the object it is being included into.

For example:

```coffee
DraggableView = 
  included: ->
    @::initialize = (options) ->
      dragging = false
  drag: ->
  drop: ->

class TaskView extends Backbone.View
  @include DraggableView

view = new TaskView
view.dragging # false
```

It's a simple pattern but it's one that has let me break a lot of functionality out into reusable mixins extremely easily.

## Todo

* Look at using constructor functions instead of raw objects. On include extend the prototypes and call the constructor after
the constructor of the mixee.
* Add quicker ways of extending the `initialize` and `dispose` methods since they're used so frequently 

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
0.1.0 - First Release

## License
Copyright (c) 2012 Anthony Short  
Licensed under the MIT license.
