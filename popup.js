var dark = false
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('changeThemeBtn');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
        if (dark) {
            chrome.tabs.executeScript({
                file: "white.js",
            });
        } else{
            chrome.tabs.executeScript({
                file: "black.js",
            });
        }
        dark = !dark
      });
    }, false);
  }, false);