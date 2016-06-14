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
