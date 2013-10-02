(function(window, document, undefined) {
  window.Cheater = {
    autoClickerIds: [],
    goldenCookieDelayId: null,
    goldenCookieClickerId: null,

    startAutoClicker: function(count) {
      var a = document.getElementById("bigCookie");
      for(var i = 0; i < 100; i++) {
        Cheater.autoClickerIds.push(setInterval(function() {
          a.click();
        }, 10));
      }      
    },

    stopAutoClicker: function() {
      while(Cheater.autoClickerIds.length > 0) {
        clearInterval(Cheater.autoClickerIds.pop());
      }
    },

    startGoldenCookieAutoClicker: function() {
      var b = document.getElementById("goldenCookie");

      Cheater.goldenCookieDelayId = setInterval(function() {
        Game.goldenCookie["delay"] = 50;
      }, 100);

      Cheater.goldenCookieClickerId = setInterval(function() {
        b.click();
      }, 10);      
    },

    stopGoldenCookieAutoClicker: function() {
      clearInterval(Cheater.goldenCookieClickerId);
      clearInterval(Cheater.goldenCookieDelayId);
    }
  }
})(window, document);
