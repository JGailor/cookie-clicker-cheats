Here's a cheat for Cookie Clicker (http://orteil.dashnet.org/cookieclicker/).  It's some javascript that manipulates some of the basic game mechanics and automates a lot of actions for you.  It's really basic, but when the fun ran out on the basic game it was entertaining to start tweaking the game a bit.

To use it just open up the game in a Chrome browser, use Cmd+Opt+i (OS X) to open the Chrome Developer Tools, click on "Console", and paste the code from cheats.js into the window.  Then you can do the following:

```
// To start auto-clicking, call this function passing in the number of automated clickers you want.  100 is a good number that
// maximizes clicking without slowing your browser down.
Cheater.startAutoClicker(100);

// To stop auto-clicking
Cheater.stopAutoClicker();

// To generate golden cookies faster and auto-click them, use the following
Cheater.startGoldenCookieAutoClicker();

// To stop golden cookie cheats
Cheater.stopGoldenCookieAutoClicker();