'use strict';

describe('DjList Application', function() {
  describe('djList', function(){
    beforeEach(function(){
      browser.get('index.html');
    });
    it('should filter the dj list as a user types into the search box', function(){
      var djList = element.all(by.repeater('song in $ctrl.songs'));
      var query = element(by.model('$ctrl.query'));
      expect(djList.count()).toBe(6935);
      query.sendKeys('Brainwash');
      expect(djList.count()).toBe(2);
      query.clear();
      query.sendKeys("King of Demos");
      expect(djList.count()).toBe(1);
    }); //search

    it('should be possible to control song order via the drop-down menu', function(){
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="bpm"]'));
      var songBPMColumn = element.all(by.repeater('song in $ctrl.songs').column('song.bpm'));

      function getBPMs () {
        return songBPMColumn.map(function(elem){
          return elem.getText();
        });
      }

      queryField.sendKeys('Brainwash 2000');

      expect(getBPMs()).toEqual(['87', '88']);

      nameOption.click();

      expect(getBPMs()).toEqual(['87', '88']);
    }); //songOrder

    it('should filter the results between the range slider values', function(){
        var lowSlider = element(by.css('.rz-pointer-min'));
        browser.actions().dragAndDrop(lowSlider, '50').mouseUp().perform(); //Failed: location.getRawId is not a function
        var highSlider = element(by.css('.rz-pointer-max'));
        browser.actions().dragAndDrop(highSlider, '52').mouseUp().perform();
        var ctrl = $componentController('djList');
        expect(ctrl.songs.length).toBe(12);
      });//filter bpm

  }); //describe djList
});
