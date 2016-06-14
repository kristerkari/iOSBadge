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
