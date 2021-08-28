chrome.contextMenus.create({
  id: "colorspy-all",
  title: "colorspy-all",
  contexts: ["all"],
  onclick: function(info) {
    console.log("all", info);

    foo();
  }
});

chrome.contextMenus.create({
  id: "colorspy-link",
  title: "colorspy-link",
  contexts: ["link"],
  onclick: function(info) {
    console.log("link", info);
  }
});

chrome.contextMenus.create({
  id: "colorspy-page",
  title: "colorspy-page",
  contexts: ["page"],
  onclick: function(info) {
    console.log("page", info);
  }
});

chrome.contextMenus.create({
  id: "colorspy-selection",
  title: "colorspy-selection",
  contexts: ["selection"],
  onclick: function(info) {
    console.log("page", info);
  }
});
