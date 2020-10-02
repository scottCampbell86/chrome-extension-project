

chrome.runtime.onInstalled.addListener(() => {  

  console.log('yooo');

  // chrome.storage.local.set(JSON.stringify({'1': 2}), () => {
  //   console.log('Value is set to ' + value);
  // })
  // chrome.storage.local.get(JSON.parse(['1']), () => {
  //   console.log('Value currently is ' + result.key)
  // })

});

