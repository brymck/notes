---
layout: default
title: Setup
description: Setting up a programming environment
---

I suppose the first thing on every potential programmer's mind is how to set
things up. What do you need?

## Tools

Many people use full-fledged IDEs (integrated development environments) like
Visual Studio or Eclipse. Those can be nice if you're working with the
Microsoft stack or Java. But if you're just starting out and not working on
something that will require a lot of refactoring or teamwork, you'll probably
be better off working with a good text editor.

I prefer [Vim][vim] (use [MacVim][mac_vim] on OS X). Others prefer
[Emacs][emacs] or [TextMate][text_mate] (Mac only). A few more go with gedit,
and some masochists go with nano or Notepad. Pick your poison, but the real
advantages of Vim and Emacs are that they have a bunch of keybindings
(shortcuts) for common programming text-editing issues. TextMate has some
really nice auto-completion features for languages like Ruby.

## Languages

If there were any language that's great for those just starting out, in my
opinion it's [Ruby][ruby]. If you're using Windows, you can install it via
[RubyInstaller][ruby_installer] (don't forget the DevKit if you intend to
install any gems requiring compilation, which is a fair number). For Mac and
Linux, you likely have a system Ruby (1.8.6 or 1.8.7 as of early 2012),
although if you want to compile a Ruby with a 1.9 handle, it's best to install
[RVM][rvm]:

{% highlight bash %}
bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
source ~/.bash_profile
rvm requirements
{% endhighlight %}

If you're on Mac and don't already have Xcode installed, you probably want to
install [Command Line Tools for Xcode][cl_tools] (free but requires an Apple ID).
I'd further recommend installing Apple GCC via Homebrew:

{% highlight bash %}
if [ ! "$(brew -v)" ]
then
  /usr/bin/ruby -e "$(/usr/bin/curl -fsSL https://raw.github.com/mxcl/homebrew/master/Library/Contributions/install_homebrew.rb)"
fi

brew install autoconf automake
brew install https://raw.github.com/adamv/homebrew-alt/master/duplicates/apple-gcc42.rb
{% endhighlight %}

If that works you can install the latest version of Ruby. This is an example using 1.9.3:

{% highlight bash %}
rvm install 1.9.3
rvm use 1.9.3 --default
{% endhighlight %}

  [vim]: http://www.vim.org/download.php
  [mac_vim]: https://github.com/b4winckler/macvim/downloads
  [emacs]: http://www.gnu.org/software/emacs/
  [text_mate]: http://macromates.com/
  [ruby]: http://www.ruby-lang.org/
  [ruby_installer]: http://rubyinstaller.org/downloads/
  [rvm]: http://beginrescueend.com/
  [cl_tools]: https://developer.apple.com/downloads/index.action?searchTextField=Command%20Line%20Tools%20for%20Xcode
