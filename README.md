[![](https://img.shields.io/npm/dt/rangi.svg?style=flat-square)](https://www.npmjs.com/package/rangi)
[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg?style=flat-square)](https://telegram.me/kamikazechaser)
[![https://github.com/kamikazechaser/rangi/blob/master/LICENSE.md](https://img.shields.io/badge/license-MIT-lightgreen.svg?style=flat-square)](https://github.com/kamikazechaser/rangi/blob/master/LICENSE)
> 🎨 Rangi

A dead simple Node.js terminal styling module that doesn't depend on any other module and is light-weight.

> "Rangi" is a Kiswahili word which translates to "color"

## Demo

![rangi](http://i.imgur.com/WKUyo3a.png "Rangi")

## Install

```bash
npm i rangi -S
```
## Usage

```javascript
const rangi = require("rangi");

// color styling
console.log(rangi.cyan("Hello World! This text is cyan in color!"));

// text formatting
console.log(rangi.bold("Hello World! This text is bold in style!"));
```

## Supported Colors

 - `Green`
 - `Magenta`
 - `Cyan`
 - `Blue`
 - `White`
 - `Grey`
 - `Black`
 - `Yellow`
 - `Red`
 
 ## Supported Text Styles

 - `Bold`
 - `Italic`
 - `Underline`
 - `Inverse` - _Inverted black and white text only_
 
## Supported Shells

 - `Windows CMD`
 - `Terminal`
 - `X-Term`
  