((window, document) ->
  "use strict"

  hasClass = (el, name) ->
    new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className)

  addClass = (el, name) ->
    if not hasClass(el, name)
      el.className += (if el.className then ' ' else '') + name

  removeClass = (el, name) ->
    if hasClass(el, name)
      el.className = el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '')

  if window.addEventListener
    keys = []
    themes = ['red', 'blue', 'green', 'grey', 'ios']
    konami = "38,38,40,40,37,39,37,39,66,65"

    randomTheme = ->
      themes[Math.floor(Math.random() * themes.length)]

    randomNumber = ->
      Math.floor(10 * Math.random())

    document.addEventListener "DOMContentLoaded", ->

      $('#side-nav').affix()
      $('table').addClass('table').addClass('table-striped').addClass('table-bordered')

      $('pre').addClass('prettyprint').addClass('linenums')
      window.prettyPrint and prettyPrint()

      icon = document.getElementById('badge-icon')
      badge = new IOSBadge(icon, size: 24 )

      demoValue = document.getElementById('demo-val')
      demoValueBtns = demoValue.getElementsByTagName('button')
      demoValue.addEventListener 'click', (e) ->
        for btn in demoValueBtns
          removeClass(btn, 'active')
        addClass(e.target, 'active')
        badge.setContent(e.target.innerHTML)
      , false

      demoSize = document.getElementById('demo-size')
      demoSizeBtns = demoSize.getElementsByTagName('button')
      demoSize.addEventListener 'click', (e) ->
        for btn in demoSizeBtns
          removeClass(btn, 'active')
        addClass(e.target, 'active')
        badge.setSize(e.target.innerHTML)
      , false

      demoTheme = document.getElementById('demo-theme')
      demoThemeBtns = demoTheme.getElementsByTagName('button')
      demoTheme.addEventListener 'click', (e) ->
        for btn in demoThemeBtns
          removeClass(btn, 'active')
        addClass(e.target, 'active')
        badge.setTheme(e.target.innerHTML)
      , false

      demoPosition = document.getElementById('demo-pos')
      demoPositionBtns = demoPosition.getElementsByTagName('button')
      demoPosition.addEventListener 'click', (e) ->
        for btn in demoPositionBtns
          removeClass(btn, 'active')
        addClass(e.target, 'active')
        badge.setPosition(e.target.innerHTML)
      , false

      window.addEventListener "keydown", (e) ->
        keys.push e.keyCode
        if keys.toString().indexOf(konami) >= 0
          setInterval ->
            badge.setContent( randomNumber() ).setTheme( randomTheme() )
            return
          , 2000
          keys.length = 0
        return
      , true

      return
    , false

    return
)(window, window.document)