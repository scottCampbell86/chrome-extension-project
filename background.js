// chrome.webNavigation.onCompleted.addListener(function() {
//   alert("Welcome to YouTube!");
//   }, {url: [{urlMatches: 'https://www.youtube.com/*'}]}
// );

const time = document.querySelector('#time');
let timeObj = { s: 0, m: 0, h: 0 };

setInterval(getTime, 1000);

function getTime() {
  //Retrieve time from google storage
  chrome.storage.sync.get({'storedTime': null}, function(data) {
    data.storedTime === null ? timeObj : timeObj = data.storedTime;
  });

  //This add time to our object
  timeObj['s'] += 1;
  if (timeObj['s']  >= 60) {
    timeObj['m'] += 1;
    timeObj['s'] = 0;
  }
  if (timeObj['m'] >= 60) {
    timeObj['h'] += 1;
    timeObj['m'] = 0;
  }

  //Updates our HTML with new time
  time.innerHTML = timeObj['h'] + ' hr ' + timeObj['m'] + ' min ' + timeObj['s'] + ' sec';
  console.log(time);

  //Stores time in our google storage
  chrome.storage.sync.set({'storedTime': timeObj}, function() {
    console.log(timeObj);
  });
  
};