'use strict';

describe('DjList Application', function() {
  describe('djList', function(){
    beforeEach(function(){
      browser.get('index.html');
    });
    it('should filter the dj list as a user types into the search box', function(){
      var djList = element.all(by.repeater('song in $ctrl.songs'));
      var query = element(by.model('$ctrl.query'));
      expect(djList.count()).toBe(3);
      query.sendKeys('Johnny');
      expect(djList.count()).toBe(1);
      query.clear();
      query.sendKeys("That's all");
      expect(djList.count()).toBe(1);
    }); //search

    it('should be possible to control song order via the drop-down menu', function(){
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css)('option[value="bpm"]');
      var songBPMColumn = element.all(by.repeater('phone in $ctrl.songs').column('song.bpm'));

      function getBPMs () {
        return songBPMColumn.map(function(elem){
          return elem.getText();
        });
      }

      queryField.sendKeys('34');

      expect(getBPMs()).toEqual(['34']);
    });


  }); //describe djList
});
