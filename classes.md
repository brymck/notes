---
layout: default
title: Classes
description: Some notes by me on classes
---

JavaScript:

{% highlight javascript %}
var Animal = (function() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.move = function(meters) {
    alert(this.name + " moved " + meters + "m");
  };

  return Animal;
})();
{% endhighlight %}

CoffeeScript:

{% highlight coffeescript %}
class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert "#{@name} moved #{meters}m"
{% endhighlight %}

Ruby:

{% highlight ruby %}
class Animal
  def initialize(name)
    @name = name
  end

  def move(meters)
    puts "#{@name} moved #{meters}"
  end
end
{% endhighlight %}
