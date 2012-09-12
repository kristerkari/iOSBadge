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
    <th>
      `1`
    </th>
  </tr>
  <tr>
    <th>size</th>
    <td>
      Set the size of your badge. Available default sizes are: `20`, `22`, `24`, `26`, `28`, `30`, `32`, `34` and `36`. Sizes can be configured in the 'iosbadge.scss' file and then built with the build tool.
    </td>
    <th>
      `20`
    </th>
  </tr>
  <tr>
    <th>theme</th>
    <td>
      Set the theme of your badge. Default themes are: `'red'`, `'blue'`, `'green'`, `'grey'` and `'ios'`. Themes can be configured in the 'iosbadge.scss' file.
    </td>
    <th>
      `'red'`
    </th>
  </tr>
  <tr>
    <th>position</th>
    <td>
      Set the position of your badge. Options are: `'top-left'`, `'top-right'`, `'bottom-left'` or `'bottom-right'`.
    </td>
    <th>
      `'top-right'`
    </th>
  </tr>
  <tr>
    <th>namespace</th>
    <td>
      Change the namespace used by the plugin. This needs to be changed in `iosbadge.scss` file as well.
    </td>
    <th>
      `'iosb'`
    </th>
  </tr>
</tbody>
</table>