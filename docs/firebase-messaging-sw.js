/**
 * @file The Firebase Messaging service worker for push notifications.
 * @author saifkhichi96
 */
'use strict';


// Initialize Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
importScripts('/assets/scripts/firebase.js');
const messaging = firebase.messaging();

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BGacQauQPSGqhuhuSnESJ46fn2AZGeY_LRZXrS5YDLSzRnGByFRJSG5VxBfswuU5p6GIHAxTYWQefDkLFEWKxGY' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/assets/images/icons/256.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
