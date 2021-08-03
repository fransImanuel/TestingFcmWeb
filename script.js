const messaging = firebase.messaging();


//vapidKeye di dapet dari project setting->cloud messaging-> di tab web configuration  terdaapat web push certifies
// messaging.requestPermission()
// .then(function(){
//     console.log("Have Permsission")
//     return messaging.getToken({
//         vapidKey: 'BGqjjRwElkERHGCD80y2hjTfxBR1ZYfwT8_zeqmuEXLMcG63Xd7SHklWRsgBiu6p8mTinSC_suEQMgwIMQnvLAQ'
//     })
// })
// .then(function(token){
//     console.log(token)
// })
// .catch(function(err){
//     console.log(err)
// })

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({
    vapidKey: 'BGqjjRwElkERHGCD80y2hjTfxBR1ZYfwT8_zeqmuEXLMcG63Xd7SHklWRsgBiu6p8mTinSC_suEQMgwIMQnvLAQ'
}).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken)
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});


messaging.onMessage(function(payload){
    console.log('onMessage: ', payload)
})
