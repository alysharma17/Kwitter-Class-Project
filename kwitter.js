var firebaseConfig = {
    apiKey: "AIzaSyAnvK1-5AHjE-bpoG4v5F6Pdu8MJbSQEvw",
    authDomain: "kwitter-chat-b4b4e.firebaseapp.com",
    databaseURL: "https://kwitter-chat-b4b4e-default-rtdb.firebaseio.com",
    projectId: "kwitter-chat-b4b4e",
    storageBucket: "kwitter-chat-b4b4e.appspot.com",
    messagingSenderId: "456869103230",
    appId: "1:456869103230:web:3c229c409cbcc6f275fa2f",
    measurementId: "G-BS832566RL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function add_user() {
var user_name=document.getElementById("user_login").value;
localStorage.setItem("username", user_name);
window.location="kwitter_room.html";
}