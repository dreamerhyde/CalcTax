/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('calculator.html', {
    id: "CalcTax",
    innerBounds: {
      width: 250,
      height: 400,
      minWidth: 250,
      minHeight: 400,
      maxWidth: 250,
      maxHeight: 400
    }
  });
});
