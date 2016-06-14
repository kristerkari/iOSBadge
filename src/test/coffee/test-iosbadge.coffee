describe "iOSBadge JS version", ->
  badge = null
  badgeWithoutNew = null
  badgeElem = null

  beforeEach ->
    badgeElem = document.createElement('div')
    badgeElem.id = 'badge'
    document.body.appendChild(badgeElem)

  afterEach ->
    badgeElem.parentNode.removeChild(badgeElem)

  describe "when a new instance is created without an element", ->
    it "should throw an error if nothing is passed", ->
      expect(-> badge = new IOSBadge()).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should throw an error if an empty object is passed", ->
      expect(-> badge = new IOSBadge({})).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should throw an error if a function is passed", ->
      expect(-> badge = new IOSBadge(->)).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should throw an error if a string is passed", ->
      expect(-> badge = new IOSBadge('test')).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should throw an error if a number is passed", ->
      expect(-> badge = new IOSBadge(1)).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should throw an error if null is passed", ->
      expect(-> badge = new IOSBadge(null)).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should throw an error if undefined is passed", ->
      expect(-> badge = new IOSBadge(undefined)).toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))
    it "should NOT throw an error if an element is passed", ->
      expect(-> badge = new IOSBadge(badgeElem)).not.toThrow(new Error('You need to pass an element as the first argument to iOSBadge'))

  describe "when a new instance is created with an element and custom settings", ->
    beforeEach ->
      badge = new IOSBadge badgeElem, content: 1, size: 24, namespace: 'test', position: 'top-left', theme: 'green'
      badgeWithoutNew = IOSBadge badgeElem, content: 1, size: 24, namespace: 'test', position: 'top-left', theme: 'green'
    it "should be defined", ->
      expect(badge).toBeDefined()
    it "should also work without the new keyword", ->
      expect(badgeWithoutNew instanceof IOSBadge).toBe(true)
    it "should have content of 1", ->
      expect(badge.content).toBe(1)
    it "should have size of 24", ->
      expect(badge.size).toBe(24)
    it "should have namespace of 'test'", ->
      expect(badge.namespace).toBe('test')
    it "should have a position of 'top-left'", ->
      expect(badge.position).toBe('top-left')
    it "should have a theme of 'green'", ->
      expect(badge.theme).toBe('green')
    it "should have a badgeElem element with a className containing 'test-24'", ->
      expect(badge.badgeElem.className).toContain('test-24')
    it "should have a badgeElem element with a className containing 'test-top-left'", ->
      expect(badge.badgeElem.className).toContain('test-top-left')
    it "should have a badgeInner element with a className containing 'test-inner'", ->
      expect(badge.badgeInner.className).toContain('test-inner')
    it "should have a badgeInner element with a className containing 'test-green'", ->
      expect(badge.badgeInner.className).toContain('test-green')
    it "should have a badgeContent element with a className containing 'test-content'", ->
      expect(badge.badgeContent.className).toContain('test-content')
    it "should have a badgeContent element with a className containing 'test-number'", ->
      expect(badge.badgeContent.className).toContain('test-number')
    it "settings should be defined", ->
      expect(badge.settings).toBeDefined()

  describe "when a new instance is created with an element and without any settings", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
      badgeWithoutNew = IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge).toBeDefined()
    it "should also work without the new keyword", ->
      expect(badgeWithoutNew instanceof IOSBadge).toBe(true)
    it "should have content of 1", ->
      expect(badge.content).toBe(1)
    it "should have size of 20", ->
      expect(badge.size).toBe(20)
    it "should have namespace of 'iosb'", ->
      expect(badge.namespace).toBe('iosb')
    it "should have a position of 'top-right'", ->
      expect(badge.position).toBe('top-right')
    it "should have a theme of 'red'", ->
      expect(badge.theme).toBe('red')
    it "should have a badgeElem element with a className containing 'iosb-20'", ->
      expect(badge.badgeElem.className).toContain('iosb-20')
    it "should have a badgeElem element with a className containing 'iosb-top-right'", ->
      expect(badge.badgeElem.className).toContain('iosb-top-right')
    it "should have a badgeInner element with a className containing 'iosb-inner'", ->
      expect(badge.badgeInner.className).toContain('iosb-inner')
    it "should have a badgeInner element with a className containing 'iosb-red'", ->
      expect(badge.badgeInner.className).toContain('iosb-red')
    it "should have a badgeContent element with a className containing 'iosb-content'", ->
      expect(badge.badgeContent.className).toContain('iosb-content')
    it "should have a badgeContent element with a className containing 'iosb-number'", ->
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "settings should be undefined", ->
      expect(badge.settings).toBeUndefined()

  describe ".getContent() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.getContent).toBeDefined()
    it "should return 1 if only default content has been set", ->
      expect(badge.getContent()).toBe(1)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should return 11 if badge content is set to 11", ->
      badge.setContent(11)
      expect(badge.getContent()).toBe(11)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should return 'test' if badge content is set to 'test'", ->
      badge.setContent('test')
      expect(badge.getContent()).toBe('test')
      expect(badge.badgeContent.className).toContain('iosb-string')
    it "should not return this", ->
      expect(badge.getContent()).not.toBe(badge)

  describe ".setContent() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.setContent).toBeDefined()
    it "should return this and not change the content if used as a getter", ->
      badge.setContent()
      expect(badge.content).toBe(1)
      expect(badge.setContent()).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should return this and not change the content if an object is passed", ->
      badge.setContent({})
      expect(badge.content).toBe(1)
      expect(badge.setContent({})).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should return this and not change the content if a function is passed", ->
      badge.setContent(->)
      expect(badge.content).toBe(1)
      expect(badge.setContent(->)).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should return this and not change the content if null is passed", ->
      badge.setContent(null)
      expect(badge.content).toBe(1)
      expect(badge.setContent(null)).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should return this and not change the content if undefined is passed", ->
      badge.setContent(undefined)
      expect(badge.content).toBe(1)
      expect(badge.setContent(undefined)).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should set content of 1 if used as a getter", ->
      badge.setContent(1).setContent()
      expect(badge.content).toBe(1)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should be able to set badge number to 11", ->
      badge.setContent(11)
      expect(badge.content).toBe(11)
      expect(badge.setContent(11)).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should be able increase badge number with '+2'", ->
      badge.setContent('+2')
      expect(badge.content).toBe(3)
      expect(badge.setContent('+2')).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should be able decrease badge number with '-2'", ->
      badge.setContent('-2')
      expect(badge.content).toBe(-1)
      expect(badge.setContent('-2')).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-number')
    it "should be able to set badge text to 'test'", ->
      badge.setContent('test')
      expect(badge.content).toBe('test')
      expect(badge.setContent('test')).toBe(badge)
      expect(badge.badgeContent.className).toContain('iosb-string')
    it "should be able to set badge text to '' and after that badgeElem should be hidden", ->
      badge.setContent('')
      expect(badge.content).toBe('')
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.setContent('')).toBe(badge)

  describe ".setPosition() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.setPosition).toBeDefined()
    it "should return this and not change the position if used as a getter", ->
      badge.setPosition()
      expect(badge.position).toBe('top-right')
      expect(badge.setPosition()).toBe(badge)
    it "should return this and not change the position if an object is passed", ->
      badge.setPosition({})
      expect(badge.position).toBe('top-right')
      expect(badge.setPosition({})).toBe(badge)
    it "should return this and not change the position if a function is passed", ->
      badge.setPosition(->)
      expect(badge.position).toBe('top-right')
      expect(badge.setPosition(->)).toBe(badge)
    it "should return this and not change the position if null is passed", ->
      badge.setPosition(null)
      expect(badge.position).toBe('top-right')
      expect(badge.setPosition(null)).toBe(badge)
    it "should return this and not change the position if undefined is passed", ->
      badge.setPosition(undefined)
      expect(badge.position).toBe('top-right')
      expect(badge.setPosition(undefined)).toBe(badge)
    it "should return this and not change the position if a number is passed", ->
      badge.setPosition(1)
      expect(badge.position).toBe('top-right')
      expect(badge.setPosition(1)).toBe(badge)
    it "should be able set the position to 'top-left'", ->
      badge.setPosition('top-left')
      expect(badge.position).toBe('top-left')
      expect(badge.badgeElem.className).toContain('iosb-top-left')
      expect(badge.setPosition('top-left')).toBe(badge)

  describe ".setTheme() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.setTheme).toBeDefined()
    it "should return this and not change the theme if used as a getter", ->
      badge.setTheme()
      expect(badge.theme).toBe('red')
      expect(badge.setTheme()).toBe(badge)
    it "should return this and not change the theme if an object is passed", ->
      badge.setTheme({})
      expect(badge.theme).toBe('red')
      expect(badge.setTheme({})).toBe(badge)
    it "should return this and not change the theme if a function is passed", ->
      badge.setTheme(->)
      expect(badge.theme).toBe('red')
      expect(badge.setTheme(->)).toBe(badge)
    it "should return this and not change the theme if null is passed", ->
      badge.setTheme(null)
      expect(badge.theme).toBe('red')
      expect(badge.setTheme(null)).toBe(badge)
    it "should return this and not change the theme if undefined is passed", ->
      badge.setTheme(undefined)
      expect(badge.theme).toBe('red')
      expect(badge.setTheme(undefined)).toBe(badge)
    it "should return this and not change the theme if a number is passed", ->
      badge.setTheme(1)
      expect(badge.theme).toBe('red')
      expect(badge.setTheme(1)).toBe(badge)
    it "should be able set the theme to 'green'", ->
      badge.setTheme('green')
      expect(badge.theme).toBe('green')
      expect(badge.badgeInner.className).toContain('iosb-green')
      expect(badge.setTheme('green')).toBe(badge)

  describe ".setSize() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.setSize).toBeDefined()
    it "should return this and not change the size if used as a getter", ->
      badge.setSize()
      expect(badge.size).toBe(20)
      expect(badge.setSize()).toBe(badge)
    it "should return this and not change the size if an object is passed", ->
      badge.setSize({})
      expect(badge.size).toBe(20)
      expect(badge.setSize({})).toBe(badge)
    it "should return this and not change the size if a function is passed", ->
      badge.setSize(->)
      expect(badge.size).toBe(20)
      expect(badge.setSize(->)).toBe(badge)
    it "should return this and not change the size if null is passed", ->
      badge.setSize(null)
      expect(badge.size).toBe(20)
      expect(badge.setSize(null)).toBe(badge)
    it "should return this and not change the size if undefined is passed", ->
      badge.setSize(undefined)
      expect(badge.size).toBe(20)
      expect(badge.setSize(undefined)).toBe(badge)
    it "should be able to set size to '24'", ->
      badge.setSize('24')
      expect(badge.size).toBe(24)
      expect(badge.badgeElem.className).toContain('24')
      expect(badge.setSize('24')).toBe(badge)
    it "should not be able to set size to 'test'", ->
      badge.setSize('test')
      expect(badge.size).toBe(20)
      expect(badge.badgeElem.className).toContain('20')
      expect(badge.setSize('test')).toBe(badge)
    it "should be able to set size to 24", ->
      badge.setSize(24)
      expect(badge.size).toBe(24)
      expect(badge.badgeElem.className).toContain('iosb-24')
      expect(badge.setSize(24)).toBe(badge)

  describe ".decreaseBy() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.decreaseBy).toBeDefined()
    it "should return this and not change the content if used as a getter", ->
      badge.decreaseBy()
      expect(badge.content).toBe(1)
      expect(badge.decreaseBy()).toBe(badge)
    it "should return this and not change the content if an object is passed", ->
      badge.decreaseBy({})
      expect(badge.content).toBe(1)
      expect(badge.decreaseBy({})).toBe(badge)
    it "should return this and not change the content if a function is passed", ->
      badge.decreaseBy(->)
      expect(badge.content).toBe(1)
      expect(badge.decreaseBy(->)).toBe(badge)
    it "should return this and not change the content if null is passed", ->
      badge.decreaseBy(null)
      expect(badge.content).toBe(1)
      expect(badge.decreaseBy(null)).toBe(badge)
    it "should return this and not change the content if undefined is passed", ->
      badge.decreaseBy(undefined)
      expect(badge.content).toBe(1)
      expect(badge.decreaseBy(undefined)).toBe(badge)
    it "should be able decrease by '2'", ->
      badge.decreaseBy('2')
      expect(badge.content).toBe(-1)
      expect(badge.decreaseBy('2')).toBe(badge)
    it "should not be able decrease by 'test'", ->
      badge.decreaseBy('test')
      expect(badge.content).toBe(1)
      expect(badge.decreaseBy('test')).toBe(badge)
    it "should be able decrease by 2", ->
      badge.decreaseBy(2)
      expect(badge.content).toBe(-1)
      expect(badge.decreaseBy(2)).toBe(badge)
    it "should be able decrease by 2 (if the content is set to 'test')", ->
      badge.setContent('test').decreaseBy(2)
      expect(badge.content).toBe(-2)
      expect(badge.decreaseBy(2)).toBe(badge)

  describe ".increaseBy() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
    it "should be defined", ->
      expect(badge.increaseBy).toBeDefined()
    it "should return this and not change the content if used as a getter", ->
      badge.increaseBy()
      expect(badge.content).toBe(1)
      expect(badge.increaseBy()).toBe(badge)
    it "should return this and not change the content if an object is passed", ->
      badge.increaseBy({})
      expect(badge.content).toBe(1)
      expect(badge.increaseBy({})).toBe(badge)
    it "should return this and not change the content if a function is passed", ->
      badge.increaseBy(->)
      expect(badge.content).toBe(1)
      expect(badge.increaseBy(->)).toBe(badge)
    it "should return this and not change the content if null is passed", ->
      badge.increaseBy(null)
      expect(badge.content).toBe(1)
      expect(badge.increaseBy(null)).toBe(badge)
    it "should return this and not change the content if undefined is passed", ->
      badge.increaseBy(undefined)
      expect(badge.content).toBe(1)
      expect(badge.increaseBy(undefined)).toBe(badge)
    it "should be able increase by '2'", ->
      badge.increaseBy('2')
      expect(badge.content).toBe(3)
      expect(badge.increaseBy('2')).toBe(badge)
    it "should NOT be able increase by 'test'", ->
      badge.increaseBy('test')
      expect(badge.content).toBe(1)
      expect(badge.increaseBy('test')).toBe(badge)
    it "should be able increase by 2", ->
      badge.increaseBy(2)
      expect(badge.content).toBe(3)
      expect(badge.increaseBy(2)).toBe(badge)
    it "should be able increase by 2 (if the content is set to 'test')", ->
      badge.setContent('test').increaseBy(2)
      expect(badge.content).toBe(2)
      expect(badge.increaseBy(2)).toBe(badge)

  describe ".show() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
      badge.hide()
    it "should be defined", ->
      expect(badge.show).toBeDefined()
    it "should return this and give the hidden element display: block if used as a getter", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show()
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show()).toBe(badge)
    it "should return this and give the hidden element display: block if an object is passed", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show({})
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show({})).toBe(badge)
    it "should return this and give the hidden element display: block if a function is passed", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show(->)
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show(->)).toBe(badge)
    it "should return this and give the hidden element display: block if null is passed", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show(null)
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show(null)).toBe(badge)
    it "should return this and give the hidden element display: block if undefined is passed", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show(undefined)
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show(undefined)).toBe(badge)
    it "should return this and give the hidden element display: block if a number is passed", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show(1)
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show(1)).toBe(badge)
    it "should return this and give the hidden element display: block if a text is passed", ->
      expect(badge.badgeElem.style.display).toBe('none')
      badge.show('test')
      expect(badge.badgeElem.style.display).toBe('block')
      expect(badge.show('test')).toBe(badge)

  describe ".hide() method", ->
    beforeEach ->
      badge = new IOSBadge(badgeElem)
      badge.show()
    it "should be defined", ->
      expect(badge.hide).toBeDefined()
    it "should return this and give the visible element display: none if used as a getter", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide()
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide()).toBe(badge)
    it "should return this and give the visible element display: none if an object is passed", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide({})
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide({})).toBe(badge)
    it "should return this and give the visible element display: none if a function is passed", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide(->)
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide(->)).toBe(badge)
    it "should return this and give the visible element display: none if null is passed", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide(null)
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide(null)).toBe(badge)
    it "should return this and give the visible element display: none if undefined is passed", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide(undefined)
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide(undefined)).toBe(badge)
    it "should return this and give the visible element display: none if a string is passed", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide('test')
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide('test')).toBe(badge)
    it "should return this and give the visible element display: none if a number is passed", ->
      expect(badge.badgeElem.style.display).toBe('block')
      badge.hide(1)
      expect(badge.badgeElem.style.display).toBe('none')
      expect(badge.hide(1)).toBe(badge)

describe "iOSBadge jQuery version", ->
  badgeElem = null
  badge = null

  beforeEach ->
    badge = document.createElement('div')
    badge.id = 'badge'
    document.body.appendChild(badge)

  afterEach ->
    badge.parentNode.removeChild(badge)

  describe "when a new instance is created with an element and without any settings", ->
    beforeEach ->
      badgeElem = $('#badge').iosbadge()
    it "should have created badgeElem element with default classes", ->
      expect(badgeElem.children().eq(0)).toExist()
      expect(badgeElem.children().eq(0)).toHaveClass('iosb')
      expect(badgeElem.children().eq(0)).toHaveClass('iosb-20')
      expect(badgeElem.children().eq(0)).toHaveClass('iosb-top-right')
    it "should have created badgeInner element with default classes", ->
      expect(badgeElem.children().children().eq(0)).toExist()
      expect(badgeElem.children().children().eq(0)).toHaveClass('iosb-inner')
      expect(badgeElem.children().children().eq(0)).toHaveClass('iosb-red')
    it "should have created badgeContent element with default classes and default content", ->
      expect(badgeElem.children().children().children().eq(0)).toExist()
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-content')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1')

  describe "when a new instance is created with an element and with custom settings", ->
    beforeEach ->
      badgeElem = $('#badge').iosbadge content: 1, size: 24, namespace: 'test', position: 'top-left', theme: 'green'
    it "should have created badgeElem element with custom classes", ->
      expect(badgeElem.children().eq(0)).toExist()
      expect(badgeElem.children().eq(0)).toHaveClass('test')
      expect(badgeElem.children().eq(0)).toHaveClass('test-24')
      expect(badgeElem.children().eq(0)).toHaveClass('test-top-left')
    it "should have created badgeInner element with custom classes", ->
      expect(badgeElem.children().children().eq(0)).toExist()
      expect(badgeElem.children().children().eq(0)).toHaveClass('test-inner')
      expect(badgeElem.children().children().eq(0)).toHaveClass('test-green')
    it "should have created badgeContent element with custom classes and custom content", ->
      expect(badgeElem.children().children().children().eq(0)).toExist()
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('test-content')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('test-number')
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1')

   describe ".iosbadge({ content: number/'text' }) option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge()
    it "should be able to set content to 1", ->
      badgeElem.iosbadge({ content: 1 })
      expect(badgeElem.iosbadge('getContent')).toBe(1)
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
    it "should be able to set content to '1'", ->
      badgeElem.iosbadge({ content: '1' })
      expect(badgeElem.iosbadge('getContent')).toBe(1)
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
    it "should be able to set content to 'test'", ->
      badgeElem.iosbadge({ content: 'test' })
      expect(badgeElem.iosbadge('getContent')).toBe('test')
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('test')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-string')
    it "should be able to set content to '+2'", ->
      badgeElem.iosbadge({ content: '+2' })
      expect(badgeElem.iosbadge('getContent')).toBe(3)
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('3')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
    it "should be able to set content to '-2'", ->
      badgeElem.iosbadge({ content: '-2' })
      expect(badgeElem.iosbadge('getContent')).toBe(-1)
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('-1')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')

   describe ".iosbadge({ theme: 'text' }) option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge()
    it "should be able to set theme to 'green'", ->
      badgeElem.iosbadge({ theme: 'green' })
      expect(badgeElem.children().children().eq(0)).toHaveClass('iosb-green')

   describe ".iosbadge({ position: 'text' }) option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge()
    it "should be able to set position to 'top-left'", ->
      badgeElem.iosbadge({ position: 'top-left' })
      expect(badgeElem.children().eq(0)).toHaveClass('iosb-top-left')

   describe ".iosbadge({ size: number/'text' }) option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge()
    it "should be able to set size to '24'", ->
      badgeElem.iosbadge({ size: '24' })
      expect(badgeElem.children().eq(0)).toHaveClass('iosb-24')
    it "should be able to set size to 24", ->
      badgeElem.iosbadge({ size: 24 })
      expect(badgeElem.children().eq(0)).toHaveClass('iosb-24')

   describe ".iosbadge({ hide: true }) option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge()
    it "when used, badgeElem should be hidden", ->
      badgeElem.iosbadge hide: true
      expect(badgeElem.children(0)).toBeHidden()

   describe ".iosbadge({ show: true }) option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge().iosbadge({ hide: true })
    it "when used, badgeElem should be visible", ->
      badgeElem.iosbadge({ show: true })
      expect(badgeElem.children(0)).toBeVisible()

   describe ".iosbadge('getContent') option", ->
    beforeEach ->
      badgeElem = $('#badge').iosbadge()
    it "should return a content of 1 if .iosbadge('getContent') is used", ->
      expect(badgeElem.iosbadge('getcontent')).toBe(1)
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
    it "should return a content of 2 if .iosbadge('getContent') is used after increasing the content by 1", ->
      expect(badgeElem.iosbadge('+1').iosbadge('getcontent')).toBe(2)
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
    it "should return a content of -2 if .iosbadge('getContent') is used after decreasing the content by 1", ->
      expect(badgeElem.iosbadge('-2').iosbadge('getcontent')).toBe(-1)
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number')
    it "should return a content of 'test' if .iosbadge('getContent') is used after setting content to 'test'", ->
      expect(badgeElem.iosbadge('test').iosbadge('getcontent')).toBe('test')
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-string')

   describe ".iosbadge('showBadge') option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge().iosbadge({ hide: true }).iosbadge('showBadge')
    it "element should be visible", ->
      expect(badgeElem.children(0)).toBeVisible()

   describe ".iosbadge('hideBadge') option", ->
    beforeEach ->
      badgeElem = $('#badge')
      badgeElem.iosbadge().iosbadge('hideBadge')
    it "element should be hidden", ->
      expect(badgeElem.children(0)).toBeHidden()
