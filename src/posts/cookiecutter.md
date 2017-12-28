---
title:  "npm install cookiecutter"
date: 2017-05-28
---

While transitioning our main website to React & creating our design system at [Lyst](https://www.lyst.com), I continuously kept hearing some variation of "we should setup Yeoman to make new components/containers/etc.". Maybe because [Yeoman](http://yeoman.io/) is quite complex to initially set-up or perhaps just because it's **so** powerful that the docs can be quite intimidating: nothing. ever. happened.

So...

## I built a thing 🍪 ✂️

Cookiecutter is a CLI for creating boilerplate files/folders based on templates you provide. It's kind of like [Python's Cookiecutter](https://github.com/audreyr/cookiecutter) but much, much simpler.

you can install via npm: `npm install cookiecutter`

Check out the [docs on github](https://github.com/mattvagni/cookiecutter).

{% include image.html alt='Cookiecutter Example' src='/images/cookiecutter-example.gif' caption='Example usage of cookiecutter in one of our repos' size='medium' %}

👍 Cookiecutter supports:

* Multiple templates with the ability to pick which template to use via the CLI.
* Multiple fields per template with the ability to specify them from the CLI.
* Custom validation & error messages for fields.
* Any type of file or folder structure.

👎 Cookiecutter **doesn't** support:

* Conditionals or any other logic in templates. (You can however achieve similar things by having multiple templates).
* Bootstrapping a project from scratch (i.e "I have no code but need to set a project up").
* Adding code to existing files.
* Lots of other things Yeoman does support. Cookiecutter is really quite simple & isn't suited for complex use-cases.

---

## Try it out

Find out more about how to configure cookiecutter etc. on Github:

{% include button.html text='cookiecutter' icon='github' href='https://github.com/mattvagni/cookiecutter' %}

## Any feedback?

Would love to know what you think. Just [open an issue](https://github.com/mattvagni/cookiecutter/issues/new) or find me on [twitter](https://www.twitter.com/mattvagni).
