---
title: Tools
date: 2017-12-28
---

More as a reminder for myself (when I next switch laptop) but also to give credit where it's due this is a list of tools and software I use and recommend.

---

## Atom setup

My editor of choice is Atom when doing 99% of work - the eco-system is amazing and it being open-source would make me want to support it even if it weren't as good as it is.

These are the plugins and theme I use:

### oceanic-next

Details: [https://atom.io/themes/oceanic-next](https://atom.io/themes/oceanic-next)

Particularly nice I find in combination with [Operator Mono](https://www.typography.com/blog/introducing-operator) by Hoefler & Co.

I won't lie it's a bit pricey but if you are staring at code all day, you might as well find what you are looking at pretty.

To use Operator in Atom just add this to your user stylesheet.

```css
atom-text-editor {
  font-family: 'OperatorMonoSSm-Light';
  font-size: 13px;
  font-weight: normal;
  line-height: 1.7;
}

atom-panel.tool-panel {
  font-size: 0.88em;
}

.editor .comment,
atom-text-editor.editor .syntax--comment {
  font-family: 'OperatorMonoSSm-LightItalic';
  font-style: normal;
}
```

This will make sure you get nice (cursive) italic comments as well as JSX and html attributes.

{% include image.html src="/images/operator-oceanic.png" caption="Screenshot from Hoefler & Co." %}

### autocomplete-modules

Details: [https://atom.io/packages/autocomplete-modules](https://atom.io/packages/autocomplete-modules)

Like the name would suggest, this package gives you autocompletion for npm packages when writing javascript. Minor, but super useful.

### dockblockr

Details: [https://atom.io/packages/docblockr](https://atom.io/packages/docblockr)

Super well know (also available for Sublime) so doesn't need much of a sales-pitch but this package essentially auto-detects a function's signature (amongst other things) and will auto-complete the correct comment block. I mean... who actually likes writing doc comments like this by hand:

```js
/**
 * A hypothetical function.
 * @param  {String} [someString='foo'] The best string
 * @param  {Number} [someNumber=1]     Your favourite number
 * @return {String}                    The result of this function
 */
function(someString='foo', someNumber=1) {
    return someString + someNumber;
}
```

### file-icons

Details: [https://atom.io/packages/file-icons](https://atom.io/packages/file-icons)

Nice file icons for different formats in your sidebar. #designer-things

### highlight-selected

Details: [https://atom.io/packages/highlight-selected](https://atom.io/packages/highlight-selected)

I use to love this subtle UI behaviour about Sublime (and PyCharm in-fact). As you would expect from the name what this package does is highlight any bit of text you double-click on in the same file. Super useful for finding where a variable is defined or where a function is used without having to search within the same file.

### language-babel

Details: [https://atom.io/packages/language-babel](https://atom.io/packages/language-babel)

Write ES6, JSX, etc. without any fuss. This plugin does _loads_. Some of the reasons I use it:

* Full ES6 grammar, syntax support
* Proper indentation and highlighting of JSX
* Context aware commenting out of JSX elements (e.g it correctly either uses `/* */` within `{}` or adds `{/* ... */}` around a normal JSX tag.)
* Highlighting for GraphQL queries
* Supports css syntax highlighting withing tagged template literals (such as in styled-components);
* Probably 12 other things I don't even know this package is responsible for.

### linter

Details: [https://atom.io/packages/linter](https://atom.io/packages/linter)

A staple of any Atom setup. In combination with other packages that implement the actual linters you need (for me it's: `linter-eslint`, `linter-sass-lint`, `linter-flow`) this means you won't first notice you missed a semicolon somewhere when it hits CI.

Linter will also install a dependent package called `linter-ui`. It's probably worth checking out it's settings once you get set-up because the default linter UI can be a bit... attention hungry.

### pigments

Details: [https://atom.io/packages/pigments](https://atom.io/packages/pigments)

In `.css` and `.scss` and a bunch of other formats, this package will visually show what any mentioned colors are so you don't have to guess whether `#185A9D` or `#6699CC` is the light blue (it's the latter). What's particularly cool is that it correctly works out colors that are defined as sass-variables (even the variable is defined in a different file).

### zentabs

Details: [https://atom.io/packages/zentabs](https://atom.io/packages/zentabs)

I first discovered how useful this behavior can be when using PyCharm. Basically what this package let's you set-up is a maximum number of open tabs. If you are jumping between many files this package will auto-close old tabs or tabs that have not been edited by you. If you want to go extreme, you can even configure zentabs to only keep one tab open at any given time. Then using `cmd + p` you can access recently open files. Very useful when working on a project you are unfamiliar with and are jumping between loads of files: no more death by 19,213 tabs.

It also let's you pin tabs but I've never really found that to be useful.

---

## iTerm setup

I literally just use iTerm because it let's you ⌘ + click on links or files to open them in your browser or editor 😅

### Theme

This is the theme you can see in the [screenshots]({% post_url 2017-05-28-cookiecutter %}) on here.

Feel free to [download it](/downloads/iterm-theme.itermcolors) and use it, it's based on this [Firewatch iTerm theme](https://github.com/rakr/iterm-two-firewatch/blob/master/two-firewatch-dark.itermcolors) with some slight modifications.

### .bash_profile

Things included in my bash_profile:

* A nice two-line bash prompt that shows the current git branch (if it's a git repo) which also tells you if whether you have uncommitted changes or not.
* A `open-pr` command that opens the url to a new PR page using the current repo and branch.
* A bunch of useful aliases
* Bash/Git autocomplete

<script src="https://gist.github.com/mattvagni/980a765b3c0b3639dc5e9e6d32b11f6e.js"></script>

---

## Design stuff

### Sketch

I mean... of course. At least until [Subform](https://subformapp.com/) is actually as good as their Kickstarter video suggested 🙈

### Prototyping

For prototyping I use whatever works. Depending on the level of fidelity and complexity I'll use anything from Marvel to Framer or even just code. I really like [create-react-app](https://github.com/facebookincubator/create-react-app) for non-trivial prototypes, especially prototypes that are more functional/have a lot of business logic. To host them, I generally use [surge.sh](https://surge.sh) to get a quick url. When working in a team, Github pages works too if you need to iterate a lot of them.

### Dropbox

I've literally not deleted anything I've designed since I was 17 - not to say that I _don't_ use selective sync to hide particularly bad or old design work 😅.

### ColorSnapper 2

Details: [https://colorsnapper.com/](https://colorsnapper.com/)

Quickly sample colors and copy paste them. Really nice that you configure two different keyboard shortcuts for the two formats you use most (i.e `rgba(255, 140, 0)` and `#FF280`).

---

## Productivity

### Alfred

Details: [https://www.alfredapp.com/](https://www.alfredapp.com/)

Quickly open apps or find files and the more you use it the better it gets.

For example, I get the following suggestions when just typing the letter "t" despite having a bunch of other apps installed that start with the letter 't' (such as Transit):

{% include image.html src="/images/alfred-screenshot.png" %}

I honestly don't know what I would do without Alfred. According to my Alfred stats, in the last 8 months I've used it **6,875 times**. Get this, now.

Also, here is [my Alfred theme](/downloads/Clean.alfredappearance).

### SizeUp

Details: [http://www.irradiatedsoftware.com/sizeup/](http://www.irradiatedsoftware.com/sizeup/)

"The missing window manager for Mac" - Using simple shortcuts, split app windows across your screen or send windows between your monitors.

### 1Password

Details: [https://1password.com/](https://1password.com/)

Besides the security benefits: no more remembering passwords. Just `⌘ + \` and 1Password logs you in. If you are migrating from not having a password manager I suggest you do it piecemeal and just slowly add logins to 1Password as you log into things - much easier and also staggers the need to change all your passwords at once.

---

Any cool tools you think I'd like? Tell me on twitter [@mattvagni](https://www.twitter.com/mattvagni).
