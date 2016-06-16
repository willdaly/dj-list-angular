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
    });


  }); //describe djList

  // describe('View: playlists', function(){
  //   beforeEach(function(){
  //     browser.get('index.html#!/playlists');
  //   });
  //   it('should display the playlist index page', function(){
  //     expect(element(by.binding('#ctrl.playlistId')).getText()).toBe('whatever');
  //   });
  // }); //playlists
});
