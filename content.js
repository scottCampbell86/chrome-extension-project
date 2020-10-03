chrome.webNavigation.onCompleted.addListener(function() {
  alert("Tracking YouTime on YouTube!");
  }, {url: [{urlMatches: 'https://www.youtube.com/*'}]}
);