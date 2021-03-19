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

    firebase.initializeApp(firebaseConfig);
    name_of_user=localStorage.getItem("username");
    name_of_room=localStorage.getItem("room_name");
      function send() {
           msg=document.getElementById("msg").value;
   firebase.database().ref(name_of_room).push({
                  name: name_of_user,
                  message: msg,
                  like: 0
            });
            document.getElementById("msg").value=""; 
            }
          
            function getData() { firebase.database().ref("/"+name_of_room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
                  firebase_message_id = childKey;
                  message_data = childData;
                  console.log(firebase_message_id);
                  console.log(message_data);
                  name=message_data['name'];
                  message=message_data['message'];
                  like=message_data['like'];
                  name_with_tag="<h4>" + name + "<img class='user_tick' src='tick.png'> </h4> ";
                  message_with_tag="<h4 class='message_h4'>"  + message + "</h4>" ;
                  button="<button class='btn btn-warning' id= "+firebase_message_id + " value= " + like + " onclick='update_like(this.id)'>";
                  span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button> <hr>";
                  row= name_with_tag + message_with_tag + button + span_with_tag;
                  document.getElementById("output").innerHTML=row;
               } });  }); }
getData();

function logout() {
      localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html"; 
}

      function updateLike(message_id) {
             console.log("clicked on like button - " + message_id); 
             button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; 
             console.log(updated_likes);
              firebase.database().ref(room_name).child(message_id).update({
                     like : updated_likes });
      }