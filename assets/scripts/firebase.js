/**
 * @file Imports and initializes the Firebase services.
 * @author saifkhichi96
 */
'use strict';


/** Initializes web app with Firebase configuration and
starts the required services (such as Analytics). */
function init() {
  // The web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-KEP7A1eVAzYaNDahzOUqeCLJaMK4lfk",
    authDomain: "meet-saifkhichi96.firebaseapp.com",
    databaseURL: "https://meet-saifkhichi96.firebaseio.com",
    projectId: "meet-saifkhichi96",
    storageBucket: "meet-saifkhichi96.appspot.com",
    messagingSenderId: "727257041805",
    appId: "1:727257041805:web:7049b6b5f6abba5ed4cbc4",
    measurementId: "G-Z2P8EMEFG7"
  };

  // Initialize Firebase
  console.log("Initializing Firebase app...");
  firebase.initializeApp(firebaseConfig);

  // Enable Firebase Analytics
  console.log("Enabling Firebase Analytics...");
  firebase.analytics();

  console.log("Firebase setup complete!");
}


// Import Firebase services and start initialization
$(init);
