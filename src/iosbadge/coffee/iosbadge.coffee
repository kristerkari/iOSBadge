(($, window, document) ->
  # 'use strict' to use ES5 strict mode.
  'use strict'

  ## Helper functions

  ###*
   Check if the content is a number
   @param content {String|Number} The content
   @return {Boolean} true or false depending on if the content is a number
   @private
  ###
  isNumber = (content) ->
    if typeof content is 'string' or typeof content is 'number'
      if not isNaN parseInt content, 10
        true
      else
        false
    else
      false

  ###* 
   Get the type of the content.
   @param content {String|Number} The content
   @return {String} The type of the content
   @private
  ###
  getType = (content) ->
    if typeof content is 'string'
      type = 'string'
    else if typeof content is 'number'
      type = 'number'
    else if typeof content is 'object'
      type = 'object'
    else if typeof content is 'function'
      type = 'function'
    return type

  ###* 
    Constructor and plugin settings

    Make sure that the plugin works even without the `new` keyword. 

    Check for any user defined settings and initialize the plugin.
    @class IOSBadge
    @constructor
    @example
        var badge = new IOSBadge();
  ###
  class window.IOSBadge 
    constructor: (element, settings) ->
      if not (@ instanceof IOSBadge)
        return new IOSBadge(element, settings)
      else if not element or not (element.nodeType and element.nodeType is 1)
        throw new Error 'You need to pass an element as the first argument to iOSBadge'
      
      @element = element
      @settings = settings

      if element.length and element.length > 1
        @element = element[0]

      if settings and typeof settings is 'object'
        @content = settings.content or 1
        @size = settings.size or 20
        @position = settings.position or 'top-right'
        @namespace = settings.namespace or 'iosb'
        @theme = settings.theme or 'red'
      else
        @content = 1
        @size = 20
        @position = 'top-right'
        @namespace = 'iosb'
        @theme = 'red'

      @_generate()

    ## Private methods
    # "Private" methods that should only
    # be used inside the plugin code.

    ###*
      Generate elements used by the plugin.
      @method _generate
      @private
    ###
    _generate: ->
      @type = getType(@content)

      @badgeElem = document.createElement('div')
      @badgeInner = document.createElement('div')
      @badgeContent = document.createElement('div')

      @_setContent(@content)
      @_setClasses(@position, @size, @type, @theme)

      @badgeInner.appendChild(@badgeContent)
      @badgeElem.appendChild(@badgeInner)
      @element.appendChild(@badgeElem)
      return

    ###*
      Set jQuery/Zepto options from the user.
      @method _setOptions
      @param options {Object|String} Plugin options given with jQuery or Zepto.
      @private
    ###
    _setOptions: (options) ->
      if options and typeof options is 'object'
        if options.content?
          @setContent(options.content)
        if options.position?
          @setPosition(options.position)
        if options.theme?
          @setTheme(options.theme)
        if options.size?
          @setSize(options.size)

        if options.hide && options.hide is true
          @hide()
        else if options.show && options.show is true 
          @show()

      else if typeof options is 'string'
        if options.toLowerCase() is 'showbadge'
          @show()
        else if options.toLowerCase() is 'hidebadge'
          @hide()
        else
          @setContent(options)
      return

    ###*
      Set the content of badge element.
      @method _setContent
      @param content {String} content for the badge element.
      @private
    ###
    _setContent: (content) ->
      @content = content
      @badgeContent.innerHTML = content
      return
    
    ###*
      Set the classnames used by the plugin.
      @method _setClasses
      @param position {String} Badge position.
      @param size {String} Badge size.
      @param type {String} Badge type (number or string).
      @param theme {String} Badge theme.
      @private
    ###
    _setClasses: (position, size, type, theme) ->
      namespace = @namespace
      @badgeElem.className = "#{namespace} #{namespace}-#{size} #{namespace}-#{position}"
      @badgeInner.className = "#{namespace}-inner #{namespace}-#{theme}"
      @badgeContent.className = "#{namespace}-content #{namespace}-#{type}"
      return

    ## Public methods
    # Public methods that you should use.
    # Most of the public methods allow chaining to be used
    # e.g. `myBadge.setContent(4).setTheme('ios').increaseBy(2);`

    ###*
      Returns the current content set for badge. Not chainable.
      @method getContent
      @return {Number|String} Badge content.
      @example
          badge.getContent();
    ###
    getContent: ->
      badgeContent = @badgeContent.innerHTML
      badgeContentInt = parseInt badgeContent, 10
      if not isNaN badgeContentInt
        badgeContentInt
      else
        badgeContent

    ###*
      Set the content of your badge. Content can be a number or a string. 
      Increase or decrease your current badge number by passing a `'+'` or `'-'` prefixed
      number in a string e.g. `.setContent('+7')`
      @method setContent
      @param content {Number|String} Badge content.
      @chainable
      @example
          badge.setContent(6);
    ###
    setContent: (content = 1) ->

      type = getType(content)

      if type is 'object' or type is 'function'
        return @
      else if @badgeElem.style.display is 'none'
        @show()

      if type is 'string'
        firstChar = content.charAt(0)
        amount = +content.substring(1) or 0
        if content is ''
          @_setContent('')
          @hide()
          return @
        else if firstChar is '+'
          @increaseBy(amount)
          return @
        else if firstChar is '-'
          @decreaseBy(amount)
          return @
        else if isNumber(content)
          type = 'number'
        else
          type = 'string'
      else
        type = 'number'

      @type = type

      @_setClasses(@position, @size, type, @theme)
      @_setContent(content)
      return @

    ###* 
      Set the position of your badge.
      Positions are: `'top-left'`, `'top-right'`, `'bottom-left'` or `'bottom-right'`.
      @method setPosition
      @param position {String} Badge position.
      @chainable
      @example
          badge.setPosition('bottom-left');
    ###
    setPosition: (position) ->
      if typeof position is 'string'
        @position = position
        @_setClasses(position, @size, @type, @theme)
      return @

    ###*
      Set the theme of your badge.
      Available default themes are: `'red'`, `'blue'`, `'green'`, `'grey'` and `'ios'`.
      Themes can be configured in the `iosbadge.scss` file.
      @method setTheme
      @param theme {String} Badge theme.
      @chainable
      @example
          badge.setTheme('ios');
    ###
    setTheme: (theme) ->
      if typeof theme is 'string'
        @theme = theme
        @_setClasses(@position, @size, @type, theme)
      return @

    ###*
      Set the size of your badge.
      Available default sizes are: `20`, `22`, `24`, `26`, `28`, `30`, `32`, `34` and `36`.
      Sizes can be configured in the `iosbadge.scss` file.
      @method setSize
      @param size {Number|String} Badge size.
      @chainable
      @example
          badge.setSize(30);
    ###
    setSize: (size) ->
      if isNumber size
        @size = parseInt size, 10
        @_setClasses(@position, @size, @type, @theme)
      return @

    ###*
      Decrease the current number in your badge.
      @method decreaseBy
      @param amount {Number} The amount to decrease by.
      @chainable
      @example
          badge.decreaseBy(2);
    ###
    decreaseBy: (amount) ->
      if isNumber amount
        @type = 'number'
        @_setClasses(@position, @size, @type, @theme)
        @_setContent (parseInt(@content, 10) or 0) - parseInt amount, 10
      return @

    ###*
      Increase the current number in your badge.
      @method increaseBy
      @param amount {Number} The amount to increase by.
      @chainable
      @example
          badge.increaseBy(2);
    ###
    increaseBy: (amount) ->
      if isNumber amount
        @type = 'number'
        @_setClasses(@position, @size, @type, @theme)
        @_setContent (parseInt(@content, 10) or 0) + parseInt amount, 10
      return @

    ###*
      Hide your badge element.
      @method hide
      @chainable
      @example
          badge.hide();
    ###
    hide: ->
      @badgeElem.style.display = 'none'
      return @

    ###*
      Show your badge element.
      @method hide
      @chainable
      @example
          badge.show();
    ###
    show: ->
      @badgeElem.style.display = 'block'
      return @

  ## jQuery and Zepto support
  #  The plugin does not require jQuery
  #  or Zepto to work, but it is possible to
  #  run the plugin using jQuery or Zepto.
  if typeof $ is 'function'
    $.fn.iosbadge = (options) ->
      iOSBadge = 'iosbadge'
      if typeof options is 'string' and options.toLowerCase() is 'getcontent' and @data(iOSBadge)
        return @data(iOSBadge).getContent()
      else
        return @each ->
          self = @
          $self = $(self)
          pluginData = $self.data(iOSBadge)
          if not pluginData
            $self.data iOSBadge, new window.IOSBadge self, options
          else
            pluginData._setOptions(options)
          return
   return
)(window.jQuery or window.Zepto, window, window.document)