---
layout: default
title: Loops
description: Basic loops
---

# For loops

The below functions will all print the numbers 0 through 9. They start at
`i = 0`, print `i`, increase `i` by 1, then check and make sure it's less than
10.

JavaScript:

{% highlight javascript %}
for (var i = 0; i < 10; i++) {
  console.log(i);
}
{% endhighlight %}

Note that you can only remove the braces {} above if it is followed by
_a single statement_. In general, this makes code harder to read, fix and change, so
it's not recommended.

CoffeeScript:

{% highlight coffeescript %}
console.log(i) for i in [1..10]
{% endhighlight %}

Ruby:

{% highlight ruby %}
10.times { |i| puts i }
{% endhighlight %}

## Extending JavaScript

Two paragraphs into its description, CoffeeScript mentions JavaScript's
"awkward braces and semicolons" and "gorgeous object model." These are both
true. There's a certain ease of expression in the Ruby line above. You can extend
JavaScript easily to have a `times` method on its numbers.

JavaScript:
{% highlight javascript %}
// Extend all numbers by adding a times method
Number.prototype.times = function(block) {
  for (var i = 0; i < this; i++) {
    block.call(this, i);
  }
};

// Use the method
10..times(function(i) { console.log(i); });
{% endhighlight %}

It's nitpicky, sure, but many languages will abbreviate some of the above
elements like `prototype`, `function` and the `for` loop, or will mercifully
require fewer braces, parentheses or semicolons. Nonetheless, how the above _works_
is quite nice:

 1. Open up the `prototype`, which is shared by all numbers.
 2. Create a new method call `times`, which you set equal to a function that:
    1. Will loop `this` times. `this` is equal to the number for which you call
       `times`. That is, `10.times` will run 10 times, and `1.times` will run
       once.
    2. Using the index of each loop, it will call the provided block.

So the extensibility is great but noisy. And even once you've added in the new
functionality, like through a third party library, using these new methods
remains ugly.

CoffeeScript:

{% highlight coffeescript %}
Number::times = (block) ->
  for i in [0...this]
    block.call this, i

10.times (i) -> console.log i
{% endhighlight %}

That's the same thing as the above written in a third as much code. More
importantly, the focus is now on the important words; things like `prototype`
and `function` have been turned into punctuation. Punctuation like `(){};` has
been phased out in favor of whitespace. As long as I keep functions and blocks
focused on a single task, I find this easier to read.

And CoffeeScript _really_ shines when you get into more complex loops. Great.
Now we have a more terse, more readable version of the above.

# While loops

To get started enter a title for your note above. When you’re ready to save
your note just use Vim’s :write or :update commands, a filename will be picked
automatically based on the title.
