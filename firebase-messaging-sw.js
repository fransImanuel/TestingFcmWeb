//ini itu buat service/pelayanan massagingnya, jadi kalo ada pesan masuk di tangani oleh script ini dlu

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
 var firebaseConfig = {
    apiKey: "AIzaSyB6XVLG05sVEVK7pObHzwLznh1DwJ2E0ZQ",
    authDomain: "warehouse-intern.firebaseapp.com",
    projectId: "warehouse-intern",
    storageBucket: "warehouse-intern.appspot.com",
    messagingSenderId: "313001252075",
    appId: "1:313001252075:web:e1d6b33768d44be09adaae",
    measurementId: "G-FLQ397KZ36"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('onMessage: ', payload)
})