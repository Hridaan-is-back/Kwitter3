var firebaseConfig = {
    apiKey: "AIzaSyBvRkfjXFn-6_32BfoRMf7WiEG-CLcixxA",
    authDomain: "class-test-17b1a.firebaseapp.com",
    projectId: "class-test-17b1a",
    storageBucket: "class-test-17b1a.appspot.com",
    messagingSenderId: "322863929829",
    appId: "1:322863929829:web:c0790dd98347df1073f70c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() 
  {
      user_name=document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
