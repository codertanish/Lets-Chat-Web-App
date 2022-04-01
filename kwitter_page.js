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

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "index.html";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    Name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = '<h4>' + Name + " <img class='chat_icon' src='Chat Icon.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
    like_button = "<button class='btn btn-grad' id=" + firebase_message_id + " value=" + like + " onclick = 'updateLike(this.id);'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    //End code
       } });  });}
       getData();

       function updateLike(message_id) {
         console.log("Clicked On Like - " + message_id);
         button_id = message_id;
         likes = document.getElementById(button_id).value;
         updated_likes = Number(likes) + 1;
         console.log(updated_likes);

         firebase.database().ref(room_name).child(message_id).update({
           like:updated_likes
         });

       }
