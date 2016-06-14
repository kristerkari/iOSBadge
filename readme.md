# iOSBadge - iOS style notification badges for modern browsers

iOSBadge is a small Javascript plugin that allows you to use iOS style notification badges on your icons or menu items in your website or web application.

## Big in features, tiny in file size

iOSBadge has lots methods, options, themes and sizes included by default. It is also really small in file size: the JS and CSS files combined are ~2kb minified and gzipped. There is no extra weight included since the plugin does not require jQuery, but you can link to jQuery inside your page and use iOSBadge like a regular jQuery plugin if you want to.

## Modern components - for modern browsers

iOSBadge is built using [Coffeescript](http://coffeescript.org/) and [Sass](http://sass-lang.com/). Using Sass is important to have CSS math to generate all the different sized badges. The plugin uses CSS3 properties and works in modern browsers only, so no oldIE support is included.

## How to use it

### 1. Link to the plugin files on your page

First link to the stylesheet inside your head element:

```html
<link rel="stylesheet" href="iosbadge.css">
```

...and then to the Javascript file before your closing `</body>` tag:

```html
<script src="iosbadge.min.js"></script>
```

### 2. Add some HTML to your page

You need an element that has CSS `position` se to `relative` (or `absolute`):

CSS:

```css
.icon { position: relative; width: 64px; height: 64px; }
```

HTML:

```html
<div id="icon" class="icon"></div>
```

### 3. Attach the badge to an element with plain Javascript, jQuery or Zepto

Using only Javascript:

```js
var icon = document.getElementById('icon');
var badge = new IOSBadge(icon, { theme: 'ios', size: 22 });
```

With the Javascript version you are able to use chaining with most of the methods (notice that this is not possible with the jQuery version), e.g.

```js
badge.hide().setContent(1).increaseBy(7).setTheme('green').show();
```

Using jQuery or Zepto* library:

```js
$("#icon").iosbadge({ theme: 'ios', size: 22 });
```

\* If you use Zepto, you need to build a custom version that has the [data module](https://github.com/madrobby/zepto#zepto-modules)

## Public methods for the Javascript version

You can use the plugin methods after you have initialized the plugin.

<table>
<thead><tr>
  <th>Plugin method</th> <th>Description</th>
</tr></thead>
<tbody>
  <tr>
    <th>getContent()</th>
    <td>
      Returns the current content that is set for the badge. Not chainable.
    </td>
  </tr>
  <tr>
    <th>setContent(content)</th>
    <td>
      Set the content of your badge. Your content can be a `Number` or a `String` e.g. `.setContent(2)`. Increase or decrease your current badge number by passing a `+` or `-` prefixed number in a string e.g. `.setContent('+7')`. Chainable.
    </td>
  </tr>
  <tr>
    <th>setPosition(position)</th>
    <td>
      Set the position of your badge. Options are: `'top-left'`, `'top-right'`, `'bottom-left'` or `'bottom-right'`. Chainable.
    </td>
  </tr>
  <tr>
    <th>setTheme(theme)</th>
    <td>
      Set the theme of your badge. Default themes are: `'red'`, `'blue'`, `'green'`, `'grey'` and `'ios'`. Themes can be configured in the `iosbadge.scss` file and then built with the included build tool. Chainable.
    </td>
  </tr>
  <tr>
    <th>setSize(size)</th>
    <td>
      Set the size of your badge. Sizes can be configured in the 'iosbadge.scss' file and then built with the included build tool. Available default sizes are: `20`, `22`, `24`, `26`, `28`, `30`, `32`, `34` and `36`. Chainable.
    </td>
  </tr>
  <tr>
    <th>decreaseBy(amount)</th>
    <td>
      Decrease the current number in your badge. Chainable.
    </td>
  </tr>
  <tr>
    <th>increaseBy(amount)</th>
    <td>
      Increase the current number in your badge. Chainable.
    </td>
  </tr>
  <tr>
    <th>hide()</th>
    <td>
      Hide your badge element. Chainable.
    </td>
  </tr>
  <tr>
    <th>show()</th>
    <td>
      Show your badge element. Chainable.
    </td>
  </tr>
</tbody>
</table>

## Plugin options

With the Javascript version the plugin options can be configured when invoking the plugin, e.g. `new IOSBadge(element, { size: 20 });`. With the jQuery/Zepto version you can use the plugin options instead of the chainable methods of the Javascript version.

<table>
<thead><tr>
  <th>Plugin&nbsp;option</th> <th>Description</th> <th>Default&nbsp;value</th>
</tr></thead>
<tbody>
  <tr>
    <th>content</th>
    <td>
      Set the content of your badge. Content can be a number or a string. Increase or decrease your current badge number by passing a `+` or `-` prefixed number in a string e.g. `.setContent('+7')`
    </td>
    <td>
      `1`
    </td>
  </tr>
  <tr>
    <th>size</th>
    <td>
      Set the size of your badge. Available default sizes are: `20`, `22`, `24`, `26`, `28`, `30`, `32`, `34` and `36`. Sizes can be configured in the `iosbadge.scss` file and then built with the build tool.
    </td>
    <td>
      `20`
    </td>
  </tr>
  <tr>
    <th>theme</th>
    <td>
      Set the theme of your badge. Default themes are: `'red'`, `'blue'`, `'green'`, `'grey'` and `'ios'`. Themes can be configured in the `iosbadge.scss` file.
    </td>
    <td>
      `'red'`
    </td>
  </tr>
  <tr>
    <th>position</th>
    <td>
      Set the position of your badge. Options are: `'top-left'`, `'top-right'`, `'bottom-left'` or `'bottom-right'`.
    </td>
    <td>
      `'top-right'`
    </td>
  </tr>
  <tr>
    <th>namespace</th>
    <td>
      Change the namespace used by the plugin. This needs to be changed in `iosbadge.scss` file as well.
    </td>
    <td>
      `'iosb'`
    </td>
  </tr>
</tbody>
</table>

## Browser support

iOSBadge works only in browsers that have support for CSS3.

It is tested to work in the following browsers:

* Internet Explorer 9+
* Firefox 3.6+
* Safari 4+
* Opera 12+
* Google Chrome
* iPad Safari (iOS 5+)
* iPhone Safari (iOS 4.1+)

## Build a custom version

### Dependencies for building a custom version of iOSBadge:

* [Node.js](http://nodejs.org/) ( [Node version manager](https://github.com/creationix/nvm) )

### How to build & contribute

1. Clone project to your local machine.
2. In terminal move to iOSBadge folder and run `npm install` to install all dependencies.
3. Make all Javascript changes in Coffeescript file(s), CSS changes in SCSS file(s). Make your changes only to files located inside the `src` folder.
4. run `npm run build` to build iOSBadge
5. Make sure that all changes are valid and open a pull request

You can use the `iosbadge.scss` file located in `src/iosbadge/scss` folder to add your custom themes and sizes.

All Javascript changes should be written in Coffeescript to `iosbadge.coffee` file located in `src/iosbadge/coffee` folder.

Run `npm run build` after your changes to build your custom version.

### Building and running unit tests

Source files for jasmine tests can be found inside `src/test` folder.

You can build and run unit tests by running `npm test` in the plugin folder in terminal.

### API documentation

Plugin API documentation can be found inside the `docs` folder.
