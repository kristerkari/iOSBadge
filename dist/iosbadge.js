/*! iOSBadge - v0.1.0
* http://kristerkari.github.com/iOSBadge/
* Copyright (c) 2016 Krister Kari; Licensed MIT */

(function($, window, document) {
  'use strict';

  /**
   Check if the content is a number
   @param content {String|Number} The content
   @return {Boolean} true or false depending on if the content is a number
   @private
   */
  var isNumber;
  isNumber = function(content) {
    if (typeof content === 'string' || typeof content === 'number') {
      if (!isNaN(parseInt(content, 10))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  /** 
    Constructor and plugin settings
  
    Make sure that the plugin works even without the `new` keyword. 
  
    Check for any user defined settings and initialize the plugin.
    @class IOSBadge
    @constructor
    @example
        var badge = new IOSBadge();
   */
  window.IOSBadge = (function() {
    function IOSBadge(element, settings) {
      if (!(this instanceof IOSBadge)) {
        return new IOSBadge(element, settings);
      } else if (!element || !(element.nodeType && element.nodeType === 1)) {
        throw new Error('You need to pass an element as the first argument to iOSBadge');
      }
      this.element = element;
      this.settings = settings;
      if (element.length && element.length > 1) {
        this.element = element[0];
      }
      if (settings && typeof settings === 'object') {
        this.content = settings.content || 1;
        this.size = settings.size || 20;
        this.position = settings.position || 'top-right';
        this.namespace = settings.namespace || 'iosb';
        this.theme = settings.theme || 'red';
      } else {
        this.content = 1;
        this.size = 20;
        this.position = 'top-right';
        this.namespace = 'iosb';
        this.theme = 'red';
      }
      this._generate();
    }


    /**
      Generate elements used by the plugin.
      @method _generate
      @private
     */

    IOSBadge.prototype._generate = function() {
      this.type = typeof this.content;
      this.badgeElem = document.createElement('div');
      this.badgeInner = document.createElement('div');
      this.badgeContent = document.createElement('div');
      this._setContent(this.content);
      this._setClasses(this.position, this.size, this.type, this.theme);
      this.badgeInner.appendChild(this.badgeContent);
      this.badgeElem.appendChild(this.badgeInner);
      this.element.appendChild(this.badgeElem);
    };


    /**
      Set jQuery/Zepto options from the user.
      @method _setOptions
      @param options {Object|String} Plugin options given with jQuery or Zepto.
      @private
     */

    IOSBadge.prototype._setOptions = function(options) {
      if (options && typeof options === 'object') {
        if (options.content != null) {
          this.setContent(options.content);
        }
        if (options.position != null) {
          this.setPosition(options.position);
        }
        if (options.theme != null) {
          this.setTheme(options.theme);
        }
        if (options.size != null) {
          this.setSize(options.size);
        }
        if (options.hide && options.hide === true) {
          this.hide();
        } else if (options.show && options.show === true) {
          this.show();
        }
      } else if (typeof options === 'string') {
        if (options.toLowerCase() === 'showbadge') {
          this.show();
        } else if (options.toLowerCase() === 'hidebadge') {
          this.hide();
        } else {
          this.setContent(options);
        }
      }
    };


    /**
      Set the content of badge element.
      @method _setContent
      @param content {Number|String} content for the badge element.
      @private
     */

    IOSBadge.prototype._setContent = function(content) {
      this.content = content;
      this.badgeContent.innerHTML = content;
    };


    /**
      Set the classnames used by the plugin.
      @method _setClasses
      @param position {String} Badge position.
      @param size {String} Badge size.
      @param type {String} Badge type (number or string).
      @param theme {String} Badge theme.
      @private
     */

    IOSBadge.prototype._setClasses = function(position, size, type, theme) {
      var namespace;
      namespace = this.namespace;
      this.badgeElem.className = namespace + " " + namespace + "-" + size + " " + namespace + "-" + position;
      this.badgeInner.className = namespace + "-inner " + namespace + "-" + theme;
      this.badgeContent.className = namespace + "-content " + namespace + "-" + type;
    };


    /**
      Returns the current content set for badge. Not chainable.
      @method getContent
      @return {Number|String} Badge content.
      @example
          badge.getContent();
     */

    IOSBadge.prototype.getContent = function() {
      var badgeContent, badgeContentInt;
      badgeContent = this.badgeContent.innerHTML;
      badgeContentInt = parseInt(badgeContent, 10);
      if (!isNaN(badgeContentInt)) {
        return badgeContentInt;
      } else {
        return badgeContent;
      }
    };


    /**
      Set the content of your badge. Content can be a number or a string. 
      Increase or decrease your current badge number by passing a `'+'` or `'-'` prefixed
      number in a string e.g. `.setContent('+7')`
      @method setContent
      @param content {Number|String} Badge content.
      @chainable
      @example
          badge.setContent(6);
     */

    IOSBadge.prototype.setContent = function(content) {
      var amount, firstChar, type;
      if (content == null) {
        content = 1;
      }
      type = typeof content;
      if (type === 'object' || type === 'function') {
        return this;
      } else if (this.badgeElem.style.display === 'none') {
        this.show();
      }
      if (type === 'string') {
        firstChar = content.charAt(0);
        amount = +content.substring(1) || 0;
        if (content === '') {
          this._setContent('');
          this.hide();
          return this;
        } else if (firstChar === '+') {
          this.increaseBy(amount);
          return this;
        } else if (firstChar === '-') {
          this.decreaseBy(amount);
          return this;
        } else if (isNumber(content)) {
          type = 'number';
        } else {
          type = 'string';
        }
      } else {
        type = 'number';
      }
      this.type = type;
      this._setClasses(this.position, this.size, type, this.theme);
      this._setContent(content);
      return this;
    };


    /** 
      Set the position of your badge.
      Positions are: `'top-left'`, `'top-right'`, `'bottom-left'` or `'bottom-right'`.
      @method setPosition
      @param position {String} Badge position.
      @chainable
      @example
          badge.setPosition('bottom-left');
     */

    IOSBadge.prototype.setPosition = function(position) {
      if (typeof position === 'string') {
        this.position = position;
        this._setClasses(position, this.size, this.type, this.theme);
      }
      return this;
    };


    /**
      Set the theme of your badge.
      Available default themes are: `'red'`, `'blue'`, `'green'`, `'grey'` and `'ios'`.
      Themes can be configured in the `iosbadge.scss` file.
      @method setTheme
      @param theme {String} Badge theme.
      @chainable
      @example
          badge.setTheme('ios');
     */

    IOSBadge.prototype.setTheme = function(theme) {
      if (typeof theme === 'string') {
        this.theme = theme;
        this._setClasses(this.position, this.size, this.type, theme);
      }
      return this;
    };


    /**
      Set the size of your badge.
      Available default sizes are: `20`, `22`, `24`, `26`, `28`, `30`, `32`, `34` and `36`.
      Sizes can be configured in the `iosbadge.scss` file.
      @method setSize
      @param size {Number|String} Badge size.
      @chainable
      @example
          badge.setSize(30);
     */

    IOSBadge.prototype.setSize = function(size) {
      if (isNumber(size)) {
        this.size = parseInt(size, 10);
        this._setClasses(this.position, this.size, this.type, this.theme);
      }
      return this;
    };


    /**
      Decrease the current number in your badge.
      @method decreaseBy
      @param amount {Number} The amount to decrease by.
      @chainable
      @example
          badge.decreaseBy(2);
     */

    IOSBadge.prototype.decreaseBy = function(amount) {
      if (isNumber(amount)) {
        this.type = 'number';
        this._setClasses(this.position, this.size, this.type, this.theme);
        this._setContent((parseInt(this.content, 10) || 0) - parseInt(amount, 10));
      }
      return this;
    };


    /**
      Increase the current number in your badge.
      @method increaseBy
      @param amount {Number} The amount to increase by.
      @chainable
      @example
          badge.increaseBy(2);
     */

    IOSBadge.prototype.increaseBy = function(amount) {
      if (isNumber(amount)) {
        this.type = 'number';
        this._setClasses(this.position, this.size, this.type, this.theme);
        this._setContent((parseInt(this.content, 10) || 0) + parseInt(amount, 10));
      }
      return this;
    };


    /**
      Hide your badge element.
      @method hide
      @chainable
      @example
          badge.hide();
     */

    IOSBadge.prototype.hide = function() {
      this.badgeElem.style.display = 'none';
      return this;
    };


    /**
      Show your badge element.
      @method hide
      @chainable
      @example
          badge.show();
     */

    IOSBadge.prototype.show = function() {
      this.badgeElem.style.display = 'block';
      return this;
    };

    return IOSBadge;

  })();
  if (typeof $ === 'function') {
    $.fn.iosbadge = function(options) {
      var iOSBadge;
      iOSBadge = 'iosbadge';
      if (typeof options === 'string' && options.toLowerCase() === 'getcontent' && this.data(iOSBadge)) {
        return this.data(iOSBadge).getContent();
      } else {
        return this.each(function() {
          var $self, pluginData, self;
          self = this;
          $self = $(self);
          pluginData = $self.data(iOSBadge);
          if (!pluginData) {
            $self.data(iOSBadge, new window.IOSBadge(self, options));
          } else {
            pluginData._setOptions(options);
          }
        });
      }
    };
  }
})(window.jQuery || window.Zepto, window, window.document);
