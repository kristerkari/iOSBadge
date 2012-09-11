
describe("iOSBadge JS version", function() {
  var badge, badgeWithoutNew;
  jasmine.getFixtures().fixturesPath = 'spec/fixtures';
  badge = null;
  badgeWithoutNew = null;
  describe("when a new instance is created without an element", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      return badgeElem = document.getElementById('badge');
    });
    it("should throw an error if nothing is passed", function() {
      return expect(function() {
        return badge = new IOSBadge();
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    it("should throw an error if an empty object is passed", function() {
      return expect(function() {
        return badge = new IOSBadge({});
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    it("should throw an error if a function is passed", function() {
      return expect(function() {
        return badge = new IOSBadge(function() {});
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    it("should throw an error if a string is passed", function() {
      return expect(function() {
        return badge = new IOSBadge('test');
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    it("should throw an error if a number is passed", function() {
      return expect(function() {
        return badge = new IOSBadge(1);
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    it("should throw an error if null is passed", function() {
      return expect(function() {
        return badge = new IOSBadge(null);
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    it("should throw an error if undefined is passed", function() {
      return expect(function() {
        return badge = new IOSBadge(void 0);
      }).toThrow('You need to pass an element as the first argument to iOSBadge');
    });
    return it("should NOT throw an error if an element is passed", function() {
      return expect(function() {
        return badge = new IOSBadge(badgeElem);
      }).not.toThrow('You need to pass an element as the first argument to iOSBadge');
    });
  });
  describe("when a new instance is created with an element and custom settings", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      badge = new IOSBadge(badgeElem, {
        content: 1,
        size: 24,
        namespace: 'test',
        position: 'top-left',
        theme: 'green'
      });
      return badgeWithoutNew = IOSBadge(badgeElem, {
        content: 1,
        size: 24,
        namespace: 'test',
        position: 'top-left',
        theme: 'green'
      });
    });
    it("should be defined", function() {
      return expect(badge).toBeDefined();
    });
    it("should also work without the new keyword", function() {
      return expect(badgeWithoutNew instanceof IOSBadge).toBe(true);
    });
    it("should have content of 1", function() {
      return expect(badge.content).toBe(1);
    });
    it("should have size of 24", function() {
      return expect(badge.size).toBe(24);
    });
    it("should have namespace of 'test'", function() {
      return expect(badge.namespace).toBe('test');
    });
    it("should have a position of 'top-left'", function() {
      return expect(badge.position).toBe('top-left');
    });
    it("should have a theme of 'green'", function() {
      return expect(badge.theme).toBe('green');
    });
    it("should have a badgeElem element with a className containing 'test-24'", function() {
      return expect(badge.badgeElem.className).toContain('test-24');
    });
    it("should have a badgeElem element with a className containing 'test-top-left'", function() {
      return expect(badge.badgeElem.className).toContain('test-top-left');
    });
    it("should have a badgeInner element with a className containing 'test-inner'", function() {
      return expect(badge.badgeInner.className).toContain('test-inner');
    });
    it("should have a badgeInner element with a className containing 'test-green'", function() {
      return expect(badge.badgeInner.className).toContain('test-green');
    });
    it("should have a badgeContent element with a className containing 'test-content'", function() {
      return expect(badge.badgeContent.className).toContain('test-content');
    });
    it("should have a badgeContent element with a className containing 'test-number'", function() {
      return expect(badge.badgeContent.className).toContain('test-number');
    });
    return it("settings should be defined", function() {
      return expect(badge.settings).toBeDefined();
    });
  });
  describe("when a new instance is created with an element and without any settings", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      badge = new IOSBadge(badgeElem);
      return badgeWithoutNew = IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge).toBeDefined();
    });
    it("should also work without the new keyword", function() {
      return expect(badgeWithoutNew instanceof IOSBadge).toBe(true);
    });
    it("should have content of 1", function() {
      return expect(badge.content).toBe(1);
    });
    it("should have size of 20", function() {
      return expect(badge.size).toBe(20);
    });
    it("should have namespace of 'iosb'", function() {
      return expect(badge.namespace).toBe('iosb');
    });
    it("should have a position of 'top-right'", function() {
      return expect(badge.position).toBe('top-right');
    });
    it("should have a theme of 'red'", function() {
      return expect(badge.theme).toBe('red');
    });
    it("should have a badgeElem element with a className containing 'iosb-20'", function() {
      return expect(badge.badgeElem.className).toContain('iosb-20');
    });
    it("should have a badgeElem element with a className containing 'iosb-top-right'", function() {
      return expect(badge.badgeElem.className).toContain('iosb-top-right');
    });
    it("should have a badgeInner element with a className containing 'iosb-inner'", function() {
      return expect(badge.badgeInner.className).toContain('iosb-inner');
    });
    it("should have a badgeInner element with a className containing 'iosb-red'", function() {
      return expect(badge.badgeInner.className).toContain('iosb-red');
    });
    it("should have a badgeContent element with a className containing 'iosb-content'", function() {
      return expect(badge.badgeContent.className).toContain('iosb-content');
    });
    it("should have a badgeContent element with a className containing 'iosb-number'", function() {
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    return it("settings should be undefined", function() {
      return expect(badge.settings).toBeUndefined();
    });
  });
  describe(".getContent() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.getContent).toBeDefined();
    });
    it("should return 1 if only default content has been set", function() {
      expect(badge.getContent()).toBe(1);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should return 11 if badge content is set to 11", function() {
      badge.setContent(11);
      expect(badge.getContent()).toBe(11);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should return 'test' if badge content is set to 'test'", function() {
      badge.setContent('test');
      expect(badge.getContent()).toBe('test');
      return expect(badge.badgeContent.className).toContain('iosb-string');
    });
    return it("should not return this", function() {
      return expect(badge.getContent()).not.toBe(badge);
    });
  });
  describe(".setContent() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.setContent).toBeDefined();
    });
    it("should return this and not change the content if used as a getter", function() {
      badge.setContent();
      expect(badge.content).toBe(1);
      expect(badge.setContent()).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should return this and not change the content if an object is passed", function() {
      badge.setContent({});
      expect(badge.content).toBe(1);
      expect(badge.setContent({})).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should return this and not change the content if a function is passed", function() {
      badge.setContent(function() {});
      expect(badge.content).toBe(1);
      expect(badge.setContent(function() {})).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should return this and not change the content if null is passed", function() {
      badge.setContent(null);
      expect(badge.content).toBe(1);
      expect(badge.setContent(null)).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should return this and not change the content if undefined is passed", function() {
      badge.setContent(void 0);
      expect(badge.content).toBe(1);
      expect(badge.setContent(void 0)).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should set content of 1 if used as a getter", function() {
      badge.setContent(1).setContent();
      expect(badge.content).toBe(1);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should be able to set badge number to 11", function() {
      badge.setContent(11);
      expect(badge.content).toBe(11);
      expect(badge.setContent(11)).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should be able increase badge number with '+2'", function() {
      badge.setContent('+2');
      expect(badge.content).toBe(3);
      expect(badge.setContent('+2')).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should be able decrease badge number with '-2'", function() {
      badge.setContent('-2');
      expect(badge.content).toBe(-1);
      expect(badge.setContent('-2')).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-number');
    });
    it("should be able to set badge text to 'test'", function() {
      badge.setContent('test');
      expect(badge.content).toBe('test');
      expect(badge.setContent('test')).toBe(badge);
      return expect(badge.badgeContent.className).toContain('iosb-string');
    });
    return it("should be able to set badge text to '' and after that badgeElem should be hidden", function() {
      badge.setContent('');
      expect(badge.content).toBe('');
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.setContent('')).toBe(badge);
    });
  });
  describe(".setPosition() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.setPosition).toBeDefined();
    });
    it("should return this and not change the position if used as a getter", function() {
      badge.setPosition();
      expect(badge.position).toBe('top-right');
      return expect(badge.setPosition()).toBe(badge);
    });
    it("should return this and not change the position if an object is passed", function() {
      badge.setPosition({});
      expect(badge.position).toBe('top-right');
      return expect(badge.setPosition({})).toBe(badge);
    });
    it("should return this and not change the position if a function is passed", function() {
      badge.setPosition(function() {});
      expect(badge.position).toBe('top-right');
      return expect(badge.setPosition(function() {})).toBe(badge);
    });
    it("should return this and not change the position if null is passed", function() {
      badge.setPosition(null);
      expect(badge.position).toBe('top-right');
      return expect(badge.setPosition(null)).toBe(badge);
    });
    it("should return this and not change the position if undefined is passed", function() {
      badge.setPosition(void 0);
      expect(badge.position).toBe('top-right');
      return expect(badge.setPosition(void 0)).toBe(badge);
    });
    it("should return this and not change the position if a number is passed", function() {
      badge.setPosition(1);
      expect(badge.position).toBe('top-right');
      return expect(badge.setPosition(1)).toBe(badge);
    });
    return it("should be able set the position to 'top-left'", function() {
      badge.setPosition('top-left');
      expect(badge.position).toBe('top-left');
      expect(badge.badgeElem.className).toContain('iosb-top-left');
      return expect(badge.setPosition('top-left')).toBe(badge);
    });
  });
  describe(".setTheme() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.setTheme).toBeDefined();
    });
    it("should return this and not change the theme if used as a getter", function() {
      badge.setTheme();
      expect(badge.theme).toBe('red');
      return expect(badge.setTheme()).toBe(badge);
    });
    it("should return this and not change the theme if an object is passed", function() {
      badge.setTheme({});
      expect(badge.theme).toBe('red');
      return expect(badge.setTheme({})).toBe(badge);
    });
    it("should return this and not change the theme if a function is passed", function() {
      badge.setTheme(function() {});
      expect(badge.theme).toBe('red');
      return expect(badge.setTheme(function() {})).toBe(badge);
    });
    it("should return this and not change the theme if null is passed", function() {
      badge.setTheme(null);
      expect(badge.theme).toBe('red');
      return expect(badge.setTheme(null)).toBe(badge);
    });
    it("should return this and not change the theme if undefined is passed", function() {
      badge.setTheme(void 0);
      expect(badge.theme).toBe('red');
      return expect(badge.setTheme(void 0)).toBe(badge);
    });
    it("should return this and not change the theme if a number is passed", function() {
      badge.setTheme(1);
      expect(badge.theme).toBe('red');
      return expect(badge.setTheme(1)).toBe(badge);
    });
    return it("should be able set the theme to 'green'", function() {
      badge.setTheme('green');
      expect(badge.theme).toBe('green');
      expect(badge.badgeInner.className).toContain('iosb-green');
      return expect(badge.setTheme('green')).toBe(badge);
    });
  });
  describe(".setSize() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.setSize).toBeDefined();
    });
    it("should return this and not change the size if used as a getter", function() {
      badge.setSize();
      expect(badge.size).toBe(20);
      return expect(badge.setSize()).toBe(badge);
    });
    it("should return this and not change the size if an object is passed", function() {
      badge.setSize({});
      expect(badge.size).toBe(20);
      return expect(badge.setSize({})).toBe(badge);
    });
    it("should return this and not change the size if a function is passed", function() {
      badge.setSize(function() {});
      expect(badge.size).toBe(20);
      return expect(badge.setSize(function() {})).toBe(badge);
    });
    it("should return this and not change the size if null is passed", function() {
      badge.setSize(null);
      expect(badge.size).toBe(20);
      return expect(badge.setSize(null)).toBe(badge);
    });
    it("should return this and not change the size if undefined is passed", function() {
      badge.setSize(void 0);
      expect(badge.size).toBe(20);
      return expect(badge.setSize(void 0)).toBe(badge);
    });
    it("should be able to set size to '24'", function() {
      badge.setSize('24');
      expect(badge.size).toBe(24);
      expect(badge.badgeElem.className).toContain('24');
      return expect(badge.setSize('24')).toBe(badge);
    });
    it("should not be able to set size to 'test'", function() {
      badge.setSize('test');
      expect(badge.size).toBe(20);
      expect(badge.badgeElem.className).toContain('20');
      return expect(badge.setSize('test')).toBe(badge);
    });
    return it("should be able to set size to 24", function() {
      badge.setSize(24);
      expect(badge.size).toBe(24);
      expect(badge.badgeElem.className).toContain('iosb-24');
      return expect(badge.setSize(24)).toBe(badge);
    });
  });
  describe(".decreaseBy() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.decreaseBy).toBeDefined();
    });
    it("should return this and not change the content if used as a getter", function() {
      badge.decreaseBy();
      expect(badge.content).toBe(1);
      return expect(badge.decreaseBy()).toBe(badge);
    });
    it("should return this and not change the content if an object is passed", function() {
      badge.decreaseBy({});
      expect(badge.content).toBe(1);
      return expect(badge.decreaseBy({})).toBe(badge);
    });
    it("should return this and not change the content if a function is passed", function() {
      badge.decreaseBy(function() {});
      expect(badge.content).toBe(1);
      return expect(badge.decreaseBy(function() {})).toBe(badge);
    });
    it("should return this and not change the content if null is passed", function() {
      badge.decreaseBy(null);
      expect(badge.content).toBe(1);
      return expect(badge.decreaseBy(null)).toBe(badge);
    });
    it("should return this and not change the content if undefined is passed", function() {
      badge.decreaseBy(void 0);
      expect(badge.content).toBe(1);
      return expect(badge.decreaseBy(void 0)).toBe(badge);
    });
    it("should be able decrease by '2'", function() {
      badge.decreaseBy('2');
      expect(badge.content).toBe(-1);
      return expect(badge.decreaseBy('2')).toBe(badge);
    });
    it("should not be able decrease by 'test'", function() {
      badge.decreaseBy('test');
      expect(badge.content).toBe(1);
      return expect(badge.decreaseBy('test')).toBe(badge);
    });
    it("should be able decrease by 2", function() {
      badge.decreaseBy(2);
      expect(badge.content).toBe(-1);
      return expect(badge.decreaseBy(2)).toBe(badge);
    });
    return it("should be able decrease by 2 (if the content is set to 'test')", function() {
      badge.setContent('test').decreaseBy(2);
      expect(badge.content).toBe(-2);
      return expect(badge.decreaseBy(2)).toBe(badge);
    });
  });
  describe(".increaseBy() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      return badge = new IOSBadge(badgeElem);
    });
    it("should be defined", function() {
      return expect(badge.increaseBy).toBeDefined();
    });
    it("should return this and not change the content if used as a getter", function() {
      badge.increaseBy();
      expect(badge.content).toBe(1);
      return expect(badge.increaseBy()).toBe(badge);
    });
    it("should return this and not change the content if an object is passed", function() {
      badge.increaseBy({});
      expect(badge.content).toBe(1);
      return expect(badge.increaseBy({})).toBe(badge);
    });
    it("should return this and not change the content if a function is passed", function() {
      badge.increaseBy(function() {});
      expect(badge.content).toBe(1);
      return expect(badge.increaseBy(function() {})).toBe(badge);
    });
    it("should return this and not change the content if null is passed", function() {
      badge.increaseBy(null);
      expect(badge.content).toBe(1);
      return expect(badge.increaseBy(null)).toBe(badge);
    });
    it("should return this and not change the content if undefined is passed", function() {
      badge.increaseBy(void 0);
      expect(badge.content).toBe(1);
      return expect(badge.increaseBy(void 0)).toBe(badge);
    });
    it("should be able increase by '2'", function() {
      badge.increaseBy('2');
      expect(badge.content).toBe(3);
      return expect(badge.increaseBy('2')).toBe(badge);
    });
    it("should NOT be able increase by 'test'", function() {
      badge.increaseBy('test');
      expect(badge.content).toBe(1);
      return expect(badge.increaseBy('test')).toBe(badge);
    });
    it("should be able increase by 2", function() {
      badge.increaseBy(2);
      expect(badge.content).toBe(3);
      return expect(badge.increaseBy(2)).toBe(badge);
    });
    return it("should be able increase by 2 (if the content is set to 'test')", function() {
      badge.setContent('test').increaseBy(2);
      expect(badge.content).toBe(2);
      return expect(badge.increaseBy(2)).toBe(badge);
    });
  });
  describe(".show() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      badge = new IOSBadge(badgeElem);
      return badge.hide();
    });
    it("should be defined", function() {
      return expect(badge.show).toBeDefined();
    });
    it("should return this and give the hidden element display: block if used as a getter", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show();
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show()).toBe(badge);
    });
    it("should return this and give the hidden element display: block if an object is passed", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show({});
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show({})).toBe(badge);
    });
    it("should return this and give the hidden element display: block if a function is passed", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show(function() {});
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show(function() {})).toBe(badge);
    });
    it("should return this and give the hidden element display: block if null is passed", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show(null);
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show(null)).toBe(badge);
    });
    it("should return this and give the hidden element display: block if undefined is passed", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show(void 0);
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show(void 0)).toBe(badge);
    });
    it("should return this and give the hidden element display: block if a number is passed", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show(1);
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show(1)).toBe(badge);
    });
    return it("should return this and give the hidden element display: block if a text is passed", function() {
      expect(badge.badgeElem.style.display).toBe('none');
      badge.show('test');
      expect(badge.badgeElem.style.display).toBe('block');
      return expect(badge.show('test')).toBe(badge);
    });
  });
  return describe(".hide() method", function() {
    beforeEach(function() {
      var badgeElem;
      loadFixtures('test-iosbadge.html');
      badgeElem = document.getElementById('badge');
      badge = new IOSBadge(badgeElem);
      return badge.show();
    });
    it("should be defined", function() {
      return expect(badge.hide).toBeDefined();
    });
    it("should return this and give the visible element display: none if used as a getter", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide();
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide()).toBe(badge);
    });
    it("should return this and give the visible element display: none if an object is passed", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide({});
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide({})).toBe(badge);
    });
    it("should return this and give the visible element display: none if a function is passed", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide(function() {});
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide(function() {})).toBe(badge);
    });
    it("should return this and give the visible element display: none if null is passed", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide(null);
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide(null)).toBe(badge);
    });
    it("should return this and give the visible element display: none if undefined is passed", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide(void 0);
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide(void 0)).toBe(badge);
    });
    it("should return this and give the visible element display: none if a string is passed", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide('test');
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide('test')).toBe(badge);
    });
    return it("should return this and give the visible element display: none if a number is passed", function() {
      expect(badge.badgeElem.style.display).toBe('block');
      badge.hide(1);
      expect(badge.badgeElem.style.display).toBe('none');
      return expect(badge.hide(1)).toBe(badge);
    });
  });
});

describe("iOSBadge jQuery version", function() {
  var badgeElem;
  jasmine.getFixtures().fixturesPath = 'spec/fixtures';
  badgeElem = null;
  describe("when a new instance is created with an element and without any settings", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      return badgeElem = $('#badge').iosbadge();
    });
    it("should have created badgeElem element with default classes", function() {
      expect(badgeElem.children().eq(0)).toBe('div');
      expect(badgeElem.children().eq(0)).toHaveClass('iosb');
      expect(badgeElem.children().eq(0)).toHaveClass('iosb-20');
      return expect(badgeElem.children().eq(0)).toHaveClass('iosb-top-right');
    });
    it("should have created badgeInner element with default classes", function() {
      expect(badgeElem.children().children().eq(0)).toBe('div');
      expect(badgeElem.children().children().eq(0)).toHaveClass('iosb-inner');
      return expect(badgeElem.children().children().eq(0)).toHaveClass('iosb-red');
    });
    return it("should have created badgeContent element with default classes and default content", function() {
      expect(badgeElem.children().children().children().eq(0)).toBe('div');
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-content');
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
      return expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1');
    });
  });
  describe("when a new instance is created with an element and with custom settings", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      return badgeElem = $('#badge').iosbadge({
        content: 1,
        size: 24,
        namespace: 'test',
        position: 'top-left',
        theme: 'green'
      });
    });
    it("should have created badgeElem element with custom classes", function() {
      expect(badgeElem.children().eq(0)).toBe('div');
      expect(badgeElem.children().eq(0)).toHaveClass('test');
      expect(badgeElem.children().eq(0)).toHaveClass('test-24');
      return expect(badgeElem.children().eq(0)).toHaveClass('test-top-left');
    });
    it("should have created badgeInner element with custom classes", function() {
      expect(badgeElem.children().children().eq(0)).toBe('div');
      expect(badgeElem.children().children().eq(0)).toHaveClass('test-inner');
      return expect(badgeElem.children().children().eq(0)).toHaveClass('test-green');
    });
    return it("should have created badgeContent element with custom classes and custom content", function() {
      expect(badgeElem.children().children().children().eq(0)).toBe('div');
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('test-content');
      expect(badgeElem.children().children().children().eq(0)).toHaveClass('test-number');
      return expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1');
    });
  });
  describe(".iosbadge({ content: number/'text' }) option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge();
    });
    it("should be able to set content to 1", function() {
      badgeElem.iosbadge({
        content: 1
      });
      expect(badgeElem.iosbadge('getContent')).toBe(1);
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1');
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
    it("should be able to set content to '1'", function() {
      badgeElem.iosbadge({
        content: '1'
      });
      expect(badgeElem.iosbadge('getContent')).toBe(1);
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('1');
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
    it("should be able to set content to 'test'", function() {
      badgeElem.iosbadge({
        content: 'test'
      });
      expect(badgeElem.iosbadge('getContent')).toBe('test');
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('test');
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-string');
    });
    it("should be able to set content to '+2'", function() {
      badgeElem.iosbadge({
        content: '+2'
      });
      expect(badgeElem.iosbadge('getContent')).toBe(3);
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('3');
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
    return it("should be able to set content to '-2'", function() {
      badgeElem.iosbadge({
        content: '-2'
      });
      expect(badgeElem.iosbadge('getContent')).toBe(-1);
      expect(badgeElem.children().children().children().eq(0)).toHaveHtml('-1');
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
  });
  describe(".iosbadge({ theme: 'text' }) option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge();
    });
    return it("should be able to set theme to 'green'", function() {
      badgeElem.iosbadge({
        theme: 'green'
      });
      return expect(badgeElem.children().children().eq(0)).toHaveClass('iosb-green');
    });
  });
  describe(".iosbadge({ position: 'text' }) option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge();
    });
    return it("should be able to set position to 'top-left'", function() {
      badgeElem.iosbadge({
        position: 'top-left'
      });
      return expect(badgeElem.children().eq(0)).toHaveClass('iosb-top-left');
    });
  });
  describe(".iosbadge({ size: number/'text' }) option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge();
    });
    it("should be able to set size to '24'", function() {
      badgeElem.iosbadge({
        size: '24'
      });
      return expect(badgeElem.children().eq(0)).toHaveClass('iosb-24');
    });
    return it("should be able to set size to 24", function() {
      badgeElem.iosbadge({
        size: 24
      });
      return expect(badgeElem.children().eq(0)).toHaveClass('iosb-24');
    });
  });
  describe(".iosbadge({ hide: true }) option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge();
    });
    return it("when used, badgeElem should be hidden", function() {
      badgeElem.iosbadge({
        hide: true
      });
      return expect(badgeElem.children(0)).toBeHidden();
    });
  });
  describe(".iosbadge({ show: true }) option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge().iosbadge({
        hide: true
      });
    });
    return it("when used, badgeElem should be visible", function() {
      badgeElem.iosbadge({
        show: true
      });
      return expect(badgeElem.children(0)).toBeVisible();
    });
  });
  describe(".iosbadge('getContent') option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      return badgeElem = $('#badge').iosbadge();
    });
    it("should return a content of 1 if .iosbadge('getContent') is used", function() {
      expect(badgeElem.iosbadge('getcontent')).toBe(1);
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
    it("should return a content of 2 if .iosbadge('getContent') is used after increasing the content by 1", function() {
      expect(badgeElem.iosbadge('+1').iosbadge('getcontent')).toBe(2);
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
    it("should return a content of -2 if .iosbadge('getContent') is used after decreasing the content by 1", function() {
      expect(badgeElem.iosbadge('-2').iosbadge('getcontent')).toBe(-1);
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-number');
    });
    return it("should return a content of 'test' if .iosbadge('getContent') is used after setting content to 'test'", function() {
      expect(badgeElem.iosbadge('test').iosbadge('getcontent')).toBe('test');
      return expect(badgeElem.children().children().children().eq(0)).toHaveClass('iosb-string');
    });
  });
  describe(".iosbadge('showBadge') option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge().iosbadge({
        hide: true
      }).iosbadge('showBadge');
    });
    return it("element should be visible", function() {
      return expect(badgeElem.children(0)).toBeVisible();
    });
  });
  return describe(".iosbadge('hideBadge') option", function() {
    beforeEach(function() {
      loadFixtures('test-iosbadge.html');
      badgeElem = $('#badge');
      return badgeElem.iosbadge().iosbadge('hideBadge');
    });
    return it("element should be hidden", function() {
      return expect(badgeElem.children(0)).toBeHidden();
    });
  });
});
