---
layout: default
title: Types
description: Some information on types
---

Early on, it became necessary to describe and differentiate the series of
zeroes and ones that comprised the important data of a program. We needed
Language creators came up with types. In C, for example, the most basic types are
tied closely to their binary origins. Consider the following:

{% highlight cpp %}
char c = 'a';
int i = 97;
printf("c = %d, i = %c\n", c, i);
// => c = 97, i = a
{% endhighlight %}

Programmers of C quickly learn that a string is just an array of characters
(terminated by a null value, but that's not the point). The relationship of all these
types seems obvious enough.

Languages developed to optimize performance for a handful of primitive types,
generally ints (integers), floats (floating point numbers), chars (characters),
etc. Some of the useful composite data types from C became primitives in
languages like Java and JavaScript. Languages like C# created huge type
hierarchies and do a lot of type-checking; all variables are required to have a
predefined type and explicit casts are often necessary. It's all a matter of
where you get off the bus; languages like Pascal make the length of strings and
arrays a part of the type.

It all gets a bit confusing for those whose introduction occurs in the middle
of the spectrum.

## Duck Typing

Dynamically typed languages like Ruby occupy the other extreme. Really,
everything is an object and there is only one type: a reference. Ruby does no
type checking, it just returns an error if an invalid method is called. This paradigm is
called duck typing:

{% highlight ruby %}
# Looks like a duck
daffy.has_feathers?     # => true
daffy.has_bill?         # => true
daffy.has_webbed_feet?  # => true

# Swims like a duck
daffy.swim              # => "paddles"

# Quacks like a duck
daffy.speak             # => "quack"
{% endhighlight %}

While this method allows for false positives, in practice it reduces a number
of errors arising purely from "having the wrong parents." Ruby, JavaScript,
Python and others care only that an object allows a method. Verifying correct
behavior is often handled by testing.
