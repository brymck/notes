---
layout: default
title: Setup
description: Setting up a programming environment
---

I suppose the first thing on every potential programmer's mind is how to set
things up. What do you need?

## Tools

Many people use full-fledged IDEs (integrated development environments) like
Visual Studio or Eclipse. Those can be nice if you're working with the Microsoft
stack or Java. But if you're just starting out and not working on something that
will require a lot of refactoring or teamwork, you'll probably be better off
working with a good text editor.

I prefer [Vim][vim] (use [MacVim][mac_vim] on OS X). Others prefer
[Emacs][emacs] or [TextMate][text_mate] (Mac only). A few more go with gedit,
and some masochists go with nano or Notepad. Pick your poison, but the
real advantages of Vim and Emacs are that they have a bunch of keybindings
(shortcuts) for common programming text-editing issues. TextMate has some really
nice auto-completion features for languages like Ruby.

## Languages

If ever there were a language that's great for those just starting out, in my
opinion it's [Ruby][ruby]. It has a gentle learning curve, doesn't instill a
mind-crippling approach to problem-solving, and has a boatload of resources for
beginners.

If you're using Windows, you can install it via [RubyInstaller][ruby_installer]
(don't forget the DevKit if you intend to install any gems requiring
compilation, which is a fair number). For Mac and Linux, you likely have a
system Ruby (1.8.6 or 1.8.7 as of early 2012), although if you want to compile a
Ruby with a 1.9 handle, it's best to install [RVM][rvm]:

{% highlight bash %}
bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
source ~/.bash_profile
rvm requirements
{% endhighlight %}

If you're on Mac and don't already have Xcode installed, you probably want to
install [Command Line Tools for Xcode][cl_tools] (free but requires an Apple
ID).

![Command ](/notes/img/cl_tools_installer.png)

You can verify that the right C compiler has been installed by running the following:

{% highlight bash %}
cc --version
# => Apple clang version 3.1 (tags/Apple/clang-318.0.54) (based on LLVM 3.1svn)
#    Target: x86_64-apple-darwin11.3.0
#    Thread model: posix
{% endhighlight %}

You can put it all together with the following:

{% highlight bash %}
bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
source ~/.bash_profile
rvm install 1.9.3
rvm use 1.9.3 --default
{% endhighlight %}

If you have any issues, try this:

{% highlight bash %}
rvm get head
rvm pkg install iconv openssl readline
rvm install 1.9.3 --with-readline-dir=$rvm_path/usr --with-iconv-dir=$rvm_path/usr --with-openssl-dir=$rvm_path/usr
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
