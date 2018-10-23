// check if service workers are supported before trying to register
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(function(reg) {
      // registration worked
      console.log('[Service Workers] Registration succeeded. Scope is ' + reg.scope);
      console.log(reg);
    }).catch(function(error) {
      // registration failed
      console.log('[Service Workers] Registration failed with ' + error);
    });
  }