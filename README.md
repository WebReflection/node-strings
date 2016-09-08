# node-strings [![build status](https://travis-ci.org/WebReflection/node-strings.svg)](https://travis-ci.org/WebReflection/node-strings)

This module is for pragmatic developers that need to easily and quickly enhance some [NodeJS](https://nodejs.org/) console log.

It's based on node core `util.inspect.colors` info, and it uses the ancient, obtrusive but handy technique of polluting `String.prototype` since it's full of trash anyway thanks to early Web days ...

<sub>(I mean ... seriously: `'wtf'.bold()` produces `'<b>wtf</b>'` in NodeJS ... **IN NODE JS**!!!)</sub>

If you think the world will stop because somebody made a `String.prototype.bold` that produces bold text in a node console,
please consider better alternatives such [Chalk](https://github.com/sindresorhus/chalk), [Colors](https://www.npmjs.org/package/colors), [Cli-colors](https://www.npmjs.org/package/cli-color), or even [Coolors](https://github.com/CodersBrothers/coolors). These proudly don't probably extend `String.prototype` and do much more.

If like me you just need to debug or temporarily enhance some string in console, without touching anything else, simply adding `.bold()` at the end of some log, I'm glad you found this little module with zero dependencies and huge portability useful.

### API

You can use, combine, and chain any of the following methods:

  * `str.italic()` to make some text italic <sup><sub>(Linux)</sub></sup>
  * `str.strike()` to strike through some text <sup><sub>(Linux)</sub></sup>
  * `str.hidden()` to create hidden text <sup><sub>(Linux, Mac)</sub></sup>
  * `str.underline()` to underline some text <sup><sub>(Linux, Mac)</sub></sup>
  * `str.blink()` to create a text that blinks <sup><sub>(Mac, highlighted on Win)</sub></sup>
  * `str.bold()` to make some text bold
  * `str.inverse()` to invert background and foreground colors
  * `str.white()` to use white as color
  * `str.grey()` to use grey as color
  * `str.black()` to use black as color
  * `str.blue()` to use blue as color
  * `str.cyan()` to use cyan as color
  * `str.green()` to use green as color
  * `str.magenta()` to use magenta as color
  * `str.red()` to use red as color
  * `str.yellow()` to use yellow as color

In alternative, you can use the returned object as generic transformer:
```js
// import the module
var strings = require('node-strings');

// use it like this if you like
console.log(strings.blink('Hello World'));

// instead of the following
console.log('Hello World'.blink());
```

You can see all exported methods by simply running `npm test`.
No check whatsoever for previously possibly available methods is done.
However, you can eventually reach original method via `''.bold.original` but I doubt you'll ever need to do so.
