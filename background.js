var x = false;
disableBrowserAction();

function disableBrowserAction() {
  chrome.browserAction.setIcon({path:"img/disable.png"});
  chrome.tabs.executeScript(null, {file: "js/abort.js"})
}

function enableBrowserAction() {
  chrome.browserAction.setIcon({path:"img/enable.png"});
  chrome.tabs.executeScript(null, {file: "js/start.js"});
}

function updateState() {
  if ( x == false ) {
    x = true;
    enableBrowserAction();
  } else {
    x = false;
    disableBrowserAction();
  }
}

chrome.browserAction.onClicked.addListener(updateState);
