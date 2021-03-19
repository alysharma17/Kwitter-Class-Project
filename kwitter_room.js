
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0DdUQm_ff7rb-9QwuAe_Koa67BrEwjYo",
      authDomain: "chat-1c14e.firebaseapp.com",
      databaseURL: "https://chat-1c14e.firebaseio.com",
      projectId: "chat-1c14e",
      storageBucket: "chat-1c14e.appspot.com",
      messagingSenderId: "661121799106",
      appId: "1:661121799106:web:55ca9d1f8a31c613dafc5b",
      measurementId: "G-3B7S76Z58C"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey; //shows room names
      //Start code
      console.log("Room Name- " + Room_names);
      var row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
     //End code
      });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function add_room() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"

});




localStorage.setItem("room name", room_name);
window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html"; 

}
