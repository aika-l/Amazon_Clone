var firebaseConfig = {
    apiKey: "AIzaSyDx8e6QbXqgQcPWkG2XLW6R36Jal1NmFtU",
    authDomain: "clone-8b3be.firebaseapp.com",
    projectId: "clone-8b3be",
    storageBucket: "clone-8b3be.appspot.com",
    messagingSenderId: "124092095548",
    appId: "1:124092095548:web:e9b0610ea0f8147b2e7739",
    measurementId: "G-RS4BEV5L24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();