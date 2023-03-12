'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Protickets2 Application', function() {

  it('should redirect `index.html` to `index.html#!/cinemas', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toContain('index.html#!/cinemas');
  });

  describe('View: Cinema list', function() {

    beforeEach(function() {
      browser.get('index.html#!/cinemas');
    });

    it('should filter the cinema list as a user types into the search box', function() {
      var cinemaList = element.all(by.repeater('cinema in $ctrl.cinemas'));
      var query = element(by.model('$ctrl.query'));

      expect(cinemaList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(cinemaList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(cinemaList.count()).toBe(8);
    });

    it('should be possible to control cinema order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var cinemaNameColumn = element.all(by.repeater('cinema in $ctrl.cinemas').column('cinema.name'));

      function getNames() {
        return cinemaNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render cinema specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.cinemas li a')).first().click();
      expect(browser.getCurrentUrl()).toContain('index.html#!/cinemas/nexus-s');
    });

  });

  describe('View: Cinema detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/cinemas/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.cinema.name')).getText()).toBe('Nexus S');
    });

    it('should display the first cinema image as the main cinema image', function() {
      var mainImage = element(by.css('img.cinema'));

      expect(mainImage.getAttribute('src')).toContain('img/cinemas/nexus-s.0.jpg');
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
      var mainImage = element(by.css('img.cinema'));
      var thumbnails = element.all(by.css('.cinema-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toContain('img/cinemas/nexus-s.2.jpg');

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toContain('img/cinemas/nexus-s.0.jpg');
    });

  });

});

