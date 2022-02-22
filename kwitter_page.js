const firebaseConfig = {
    apiKey: "AIzaSyCORjPR2DMMFLCRcdiXHrKYzjnKR6NOveE",
    authDomain: "lets-chat-web-app-5337e.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-5337e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-5337e",
    storageBucket: "lets-chat-web-app-5337e.appspot.com",
    messagingSenderId: "483559033336",
    appId: "1:483559033336:web:05a8c03f25924335daee0d"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

  }

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
      });

      document.getElementById("message").value = "";
      
  }