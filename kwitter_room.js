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
 console.log(user_name);
 document.getElementById("tag").innerHTML = "Welcome " + user_name + " !";

  function addRoom() {
   room_name = document.getElementById("room_name").value;

   localStorage.setItem("room_name", room_name);

   firebase.database().ref("/").child(room_name).update({
     purpose : "Adding Room Name"
   });

   window.location = "kwitter_page.html";

 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code


console.log("Room Name -" + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div>";
document.getElementById("output").innerHTML += row;

//End code
});});}

getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");

  window.location = "index.html"
}



